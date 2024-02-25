import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/screens/Login';
import GamePlay from './src/components/screens/GamePlay';
import Lost from './src/components/screens/Lost';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Game" component={GamePlay} options={{headerShown:false}}/>
        <Stack.Screen name="Lost" component={Lost} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}