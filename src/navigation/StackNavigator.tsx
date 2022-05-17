
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { tutorialScreen } from '../screens/tutorialScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {

  return (
   <Stack.Navigator>
      <Stack.Screen name="tutorialScreen" component={tutorialScreen} />
     
    </Stack.Navigator>
  )
}
