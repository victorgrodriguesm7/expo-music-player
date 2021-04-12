import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import AudioList from '../../components/AudioList';
import style from './style';

export default function Musics() {
    return (
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.title}>Music List</Text>
            </View>
            <AudioList/>
        </View>
    )
}
