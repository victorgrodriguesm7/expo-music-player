import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import style from './style';

export default function Musics() {
    return (
        <View style={style.container}>
            <ScrollView>
                <Text>Music List</Text>
            </ScrollView>
        </View>
    )
}
