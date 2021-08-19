import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../theme'

import { MainScreen} from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Main" screenOptions={navigatorOptions}>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Блог' }} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const navigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.WHITE_COLOR,
  },
  headerTintColor: Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
