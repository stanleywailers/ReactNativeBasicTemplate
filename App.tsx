import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
//import { splashScreen } from './src/screens/SplashScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  // <NavigationContainer>
  //   <StackNavigator></StackNavigator>
  // </NavigationContainer>
   
  )
}

export default App;