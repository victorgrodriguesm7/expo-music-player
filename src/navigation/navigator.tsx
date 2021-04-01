import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import React from 'react'
import Home from '../pages/Player'
import Musics from '../pages/Musics'
import Playlist from '../pages/Playlist'


const Tab = createBottomTabNavigator()
export default function Navigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#181818',
                },
                labelPosition: "beside-icon",
                activeTintColor: "#fff",
                inactiveTintColor: "#a3a3a3"
            }}
            >
            <Tab.Screen 
                name="Musics"
                component={Musics}
                options={{
                    tabBarIcon: ({color, size}) => <Ionicons name="headset" size={size} color={color} />
                }}
            />
            <Tab.Screen 
                name="Player"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => <MaterialIcons name="album" size={size} color={color} />
                }} 
            />
            <Tab.Screen 
                name="Playlists"
                component={Playlist}
                options={{
                    tabBarIcon: ({color, size}) => <MaterialIcons name="library-music" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}
