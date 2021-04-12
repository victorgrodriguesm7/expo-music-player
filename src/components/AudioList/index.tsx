import * as MediaLibrary from 'expo-media-library';
import React, { Component } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { audioContext } from '../../contexts/AudioContext';
import AudioTile from '../AudioTile';
import OptionModal from '../OptionModal';
import style from './style';

interface AudioListState {
    isModalVisible: boolean;
    musicSelected: Music;
}

interface Music {
    title: string;
    duration: string;
}

export default class AudioList extends Component<{}, AudioListState> {
    static contextType = audioContext;
    context!: React.ContextType<typeof audioContext>;

    constructor(props: any){
        super(props);

        this.state = {
            isModalVisible: false,
            musicSelected: {} as Music
        }
    }
    layoutProvider = new LayoutProvider(
        (i) => 'audio', 
        (type, dim) => {
            switch(type){
                case "audio":
                    dim.width = Dimensions.get('window').width;
                    dim.height = 70;
                    break;
                default:
                    dim.width = Dimensions.get('window').width;
                    dim.height = Dimensions.get('window').height;
            }
        }
    );

    rowRenderer = (type: String | number, item: MediaLibrary.Asset) => {
        return <AudioTile 
            item={item} 
            onOptionPress={(music: Music) => {
                this.setState({
                    ...this.state,
                    musicSelected: music,
                    isModalVisible: true
                });
            }}
        />
    }
    
    render() {
        console.log(this.state.musicSelected);
        return (
            <audioContext.Consumer>
                {({dataProvider}) => {
                    return (
                        <View style={style.container}>
                            <RecyclerListView
                                style={style.list}
                                dataProvider={dataProvider} 
                                layoutProvider={this.layoutProvider}
                                rowRenderer={this.rowRenderer}
                            />
                            <OptionModal 
                                visible={this.state.isModalVisible}
                                music={this.state.musicSelected}
                                onClose={() => {
                                    this.setState({...this.state, isModalVisible: false})
                                }}/>
                        </View>
                    );
                }}
            </audioContext.Consumer>
        );
    }
}
