import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from '../pages/Home'
import SubscriptionScreen from '../pages/Subscription'
import ExploreScreen from '../pages/Explore'
import ProfileScreen from '../pages/Profile'

const Navigator = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const SubscriptionStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
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
    {StatusBar.setBackgroundColor('#c20106')}
    {StatusBar.setBarStyle('light-content', true)}
    <HomeStack.Screen name="Home" component={HomeScreen}/>
  </HomeStack.Navigator>
)

const SubscriptionStackScreen = () => (
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
    {StatusBar.setBackgroundColor('#c20106')}
    {StatusBar.setBarStyle('light-content', true)}
    <SubscriptionStack.Screen name="Subscription" component={SubscriptionScreen}/>
  </SubscriptionStack.Navigator>
)

const ExploreStackScreen = () => (
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
    {StatusBar.setBackgroundColor('#c20106')}
    {StatusBar.setBarStyle('light-content', true)}
    <ExploreStack.Screen name="Explore" component={ExploreScreen}/>
  </ExploreStack.Navigator>
)

const ProfileStackScreen = () => (
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
    {StatusBar.setBackgroundColor('#c20106')}
    {StatusBar.setBarStyle('light-content', true)}
    <ProfileStack.Screen name="Profile" component={ProfileScreen}/>
  </ProfileStack.Navigator>
)

export default function HomeStackNavigator() {
  return (
    <Navigator.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#FFFAFA',
        inactiveBackgroundColor: '#FFFAFA',
        activeTintColor: "#ff0000",
        style: {
          borderTopWidth: 0.5,
        }
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
