import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';


import { THEME } from '../theme'

import { MainScreen} from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'



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

function MainStackScreen() {

  return (
    <MainStack.Navigator  screenOptions={navigatorOptions}>
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Post" component={PostScreen} />
    </MainStack.Navigator>
  );
}

const BookedStack = createNativeStackNavigator();

function BookedStackScreen() {
  return (
    <BookedStack.Navigator screenOptions={navigatorOptions}>
      <BookedStack.Screen name="Booked" component={BookedScreen} />
      <BookedStack.Screen name="Post" component={PostScreen} />
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


function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={navigatorBookedOptions}>
      <Tab.Screen name="Main" component={MainStackScreen} />
      <Tab.Screen name="Booked" component={BookedStackScreen}  />
    </Tab.Navigator>
  );
}

const AboutStack = createNativeStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator screenOptions={navigatorOptions}>
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
}

const CreateStack = createNativeStackNavigator();

function CreateStackScreen() {
  return (
    <CreateStack.Navigator  screenOptions={navigatorOptions}>
      <CreateStack.Screen name="Create" component={CreateScreen} />
    </CreateStack.Navigator>
  );
}


const Drawer = createDrawerNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false, drawerActiveTintColor: 'tomato'}}>
        <Drawer.Screen name="PostTabs" component={TabNavigation} options={{drawerLabel: 'Главная', drawerIcon:() => {return (<Ionicons name='star'/>)}}} />
        <Drawer.Screen name="About" component={AboutStackScreen} options={{drawerLabel: 'О приложении'}} />
        <Drawer.Screen name="Create" component={CreateStackScreen} options={{drawerLabel: 'Новый пост'}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}