import React from 'react';
import { View, Text, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import style from './style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface OptionModalProps {
    visible: boolean;
    music: Music;
    onClose: () => void;
}

interface Music {
    title: string;
    duration: string;
}

export default function OptionModal({ visible, music, onClose }: OptionModalProps) {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            >
            <View style={style.container}>
                <Text style={style.title}>{ music.title }</Text>
                <Text style={style.subtitle}>{ music.duration }</Text>
                <View style={style.optionContainer}>
                    <MaterialIcons name="favorite-border" 
                        style={style.icon}
                    />
                    <Text style={style.option}>Like</Text>
                </View>
                <View style={style.optionContainer}>
                    <MaterialIcons name="play-arrow" 
                        style={style.icon}
                    />
                    <Text style={style.option}>Play</Text>
                </View>
                <View style={style.optionContainer}>
                    <MaterialIcons name="playlist-add" 
                        style={style.icon}
                    />
                    <Text style={style.option}>Add to playlist</Text>
                </View>
            </View>
            <TouchableWithoutFeedback
                containerStyle={style.fill}
                onPress={onClose}
            />
        </Modal>
    )
}
