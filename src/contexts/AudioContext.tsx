import React, { Component, createContext, ReactNode, useEffect, useState } from 'react'
import { Alert, Text, View, StyleSheet, Linking, Button } from 'react-native'
import * as MediaLibrary from 'expo-media-library';

interface AudioContextData {
    audioFiles: Array<MediaLibrary.Asset>;
    permissionError: boolean;
}

export const audioContext = createContext({} as AudioContextData);

export default class AudioProvider extends Component<{}, AudioContextData>{
    constructor(props: any){
        super(props);

        this.state = {
            audioFiles: [] as Array<MediaLibrary.Asset>,
            permissionError: false
        }
    }

    async getAudioFiles(){
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: "audio"
        });

        media = await MediaLibrary.getAssetsAsync({
            mediaType: "audio",
            first: media.totalCount
        });

        this.setState({ 
            ...this.state, 
            audioFiles: media.assets
        });
    }

    permissionAlert(){
        Alert.alert(
            "Permission Required",
            "This app need to read audio files",
            [{
                text: "Ok",
                onPress: () => this.getPermission()
            }, {
                text: "Cancel",
                onPress: () => this.permissionAlert()
            }]
        )
    }

    async getPermission() {
        const permission = await MediaLibrary.getPermissionsAsync();
        
        if(permission.granted){
            this.getAudioFiles();
        }
        
        if (!permission.canAskAgain && !permission.granted){
            this.setState({
                ...this.state, permissionError: true
            })
        }

        if(!permission.granted && permission.canAskAgain) {
            const { status, canAskAgain }= await MediaLibrary
                .requestPermissionsAsync();

            if(status === "denied" && canAskAgain){
                this.permissionAlert();
            }

            if( status === "granted"){
                this.getAudioFiles();
            }

            if (status === "denied" && !canAskAgain){
                this.setState({
                    ...this.state, permissionError: true
                })
            }
        }
    }

    componentDidMount() {
        this.getPermission();
    }

    render(){
        if (this.state.permissionError)
            return (
                <View style={style.permissionError}>
                    <Text style={style.textError}>It loooks like you haven't accept the permission</Text>
                    <Button
                        onPress={() => Linking.openSettings()}
                        title="Accept Permissions"
                        color="red"
                        accessibilityLabel="You Need Accept the Read Files permissions manually"
                    />
                </View>
            );
        return (
            <audioContext.Provider value={{...this.state}}>
                { this.props.children }
            </audioContext.Provider>
        );
    }
}



const style = StyleSheet.create({
    permissionError: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textError: {
        color: 'red',
        textAlign: "center",
        fontSize: 24,
        marginBottom: 20
    }
});