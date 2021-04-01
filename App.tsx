import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/navigator';
import AudioProvider from './src/contexts/AudioContext';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <AudioProvider>
      <StatusBar/>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </AudioProvider>
  );
}
