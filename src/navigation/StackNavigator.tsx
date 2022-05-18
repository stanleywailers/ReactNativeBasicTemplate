
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TutorialScreen } from '../screens/TutorialScreen';

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
      <Stack.Screen name="tutorialScreen" component={TutorialScreen} />
     
    </Stack.Navigator>
  )
}
