import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../pages/Home'
import SubscriptionScreen from '../pages/Subscription'
import ExploreScreen from '../pages/Explore'
import ProfileScreen from '../pages/Profile'

const Navigator = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const SubscriptionStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#e71d25',
      },
      headerStatusBarHeigh: 1000,
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    {StatusBar.setBarStyle('light-content', true)}
    <HomeStack.Screen name="Home" component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor='#e71d25' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
      />
  </HomeStack.Navigator>
)

const SubscriptionStackScreen = ({navigation}) => (
  <SubscriptionStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor: '#e71d25',
      },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    {StatusBar.setBarStyle('light-content', true)}
    <SubscriptionStack.Screen name="Subscription" component={SubscriptionScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor='#e71d25' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
      />
  </SubscriptionStack.Navigator>
)

const ExploreStackScreen = ({navigation}) => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor: '#e71d25',
      },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    {StatusBar.setBarStyle('light-content', true)}
    <ExploreStack.Screen name="Explore" component={ExploreScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor='#e71d25' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
      />
  </ExploreStack.Navigator>
)

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor: '#e71d25',
      },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    {StatusBar.setBarStyle('light-content', true)}
    <ProfileStack.Screen name="Profile" component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor='#e71d25' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
      />
  </ProfileStack.Navigator>
)

export default function HomeStackNavigator() {
  return (
    <Navigator.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#FFFAFA',
        // activeBackgroundColor: '#3F3F3F',
        // inactiveBackgroundColor: '#3F3F3F',
        inactiveBackgroundColor: '#FFFAFA',
        activeTintColor: "#ff0000",
      }}
    >
      <Navigator.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarIcon: props => (
            <AntDesign name="home" size={props.size} color={props.color} />
          ),
        }}
      />
      <Navigator.Screen name="Subscription" component={SubscriptionStackScreen}
        options={{
            backgroundColor: '#red',
          tabBarIcon: props => (
            <MaterialCommunityIcons name="view-dashboard-outline" size={props.size} color={props.color} />
          ),
        }}
      />
      <Navigator.Screen name="Explore" component={ExploreStackScreen}
        options={{
          tabBarIcon: props => (
            <Entypo name="magnifying-glass" size={props.size} color={props.color} />
          ),
        }}
      />
      <Navigator.Screen name="Profile" component={ProfileStackScreen}
        options={{
          tabBarIcon: props => (
            <AntDesign name="user" size={props.size} color={props.color} />
          ),
        }}
      />
    </Navigator.Navigator>
  )
}
