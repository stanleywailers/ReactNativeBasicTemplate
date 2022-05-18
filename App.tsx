import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native'
import { StackNavigator } from './src/navigation/StackNavigator';
import { splashScreen } from './src/screens/SplashScreen';


 const App = () => {
  return (
  <NavigationContainer>
    <StackNavigator></StackNavigator>
  </NavigationContainer>
   
  )
}

export default App;