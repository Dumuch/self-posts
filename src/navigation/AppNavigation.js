import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';


import { THEME } from '../theme'

import { MainScreen} from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookedScreen } from '../screens/BookedScreen'



const MainStack = createNativeStackNavigator();

const navigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.WHITE_COLOR,
  },
  headerTintColor: Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

function MainStackScreen({navigator}) {
  console.log(navigator)
  return (
    <MainStack.Navigator initialRouteName="Main" screenOptions={navigatorOptions}>
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Post" component={PostScreen} />
    </MainStack.Navigator>
  );
}

const BookedStack = createNativeStackNavigator();

function BookedStackScreen() {
  return (
    <BookedStack.Navigator initialRouteName="Main" screenOptions={navigatorOptions}>
      <BookedStack.Screen name="Main" component={MainScreen} />
      <BookedStack.Screen name="Book" component={BookedScreen} />
    </BookedStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

const navigatorBookedOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Main') {
      iconName = focused
        ? 'ios-information-circle'
        : 'ios-information';
    } else if (route.name === 'Booked') {
      iconName = focused ? 'ios-star' : 'ios-star';
    }

    return <Ionicons name={iconName} size={size} color={color} />; 
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  headerShown: false 
})


export function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Main" screenOptions={navigatorBookedOptions}>
        <Tab.Screen name="Main" component={MainStackScreen} />
        <Tab.Screen name="Booked" component={BookedScreen}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

