import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/screens/Login';
import GamePlay from './src/components/screens/GamePlay';
import Lost from './src/components/screens/Lost';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Game" component={GamePlay} />
        <Stack.Screen name="Lost" component={Lost} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}