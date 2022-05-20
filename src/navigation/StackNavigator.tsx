
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import { TutorialScreen } from '../screens/TutorialScreen';
import { SplashScreen } from '../screens/SplashScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {

  return (
   <Stack.Navigator
      screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#FFF'
          }
      }}
   >
    <Stack.Screen  options={{headerShown: false}} name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
  </Stack.Navigator>
  )}
