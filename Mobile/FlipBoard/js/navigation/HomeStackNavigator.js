import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../pages/Home'
import SettingsScreen from '../pages/Settings'

const Navigator = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen}/>
  </HomeStack.Navigator>
)

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
  </SettingsStack.Navigator>
)

export default function HomeStackNavigator() {
  return (
    <Navigator.Navigator>
      <Navigator.Screen name="Home" component={HomeStackScreen} />
      <Navigator.Screen name="Settings" component={SettingsStackScreen} />
    </Navigator.Navigator>
  )
}
