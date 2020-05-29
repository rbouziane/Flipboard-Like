import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Navigator = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Navigator.Navigator>
    //   <BottomTab.Screen name="Home" component={HomeStackScreen} />
    //   <BottomTab.Screen name="Settings" component={SettingsStackScreen} />
    </Navigator.Navigator>
  )
}
