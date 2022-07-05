import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import {SplashScreen} from '../screens/SplashScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { TutorialScreen } from '../screens/tutorialScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
