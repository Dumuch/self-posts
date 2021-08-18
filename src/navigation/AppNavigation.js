import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Main" >
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'блог' }} />
        <Stack.Screen name="Post" component={PostScreen} options={{ title: 'Книга' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

