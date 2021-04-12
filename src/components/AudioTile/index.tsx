import React from 'react'
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons'; 
import { View, Text } from 'react-native'
import style from './style'

interface AudioTileProps {
    item: MediaLibrary.Asset;
    onOptionPress: (music: Music) => void;
}

interface Music {
    title: string;
    duration: string;
}

export default function AudioTile({ item, onOptionPress }: AudioTileProps) {
    const minutes = String(Math.floor(item.duration / 60)).padStart(2, "0");
    const seconds = String(Math.trunc(item.duration % 60)).padStart(2, "0");

    function removeExtensionfile(filename: string){
        return filename.split('.').slice(0, -1).join('.')
    }

    const duration = `${minutes}:${seconds}`;
    const title = removeExtensionfile(item.filename);

    return (
        <View style={style.tile}>
            <View style={style.left}>
                <Text numberOfLines={1} style={style.title}>{ title }</Text>
                <Text numberOfLines={1} style={style.timer}>{ duration }</Text>
            </View>
            <View style={style.right}>
                <MaterialIcons name="favorite-border" 
                    style={{...style.icon, color: "green"}}
                />
                <MaterialIcons 
                    onPress={() => onOptionPress({ title, duration} as Music)}
                    name="more-vert" 
                    style={style.icon}
                />
            </View>
            
        </View>
    )
}
