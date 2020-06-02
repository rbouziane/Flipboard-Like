import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Navigator = createStackNavigator();

import LoginGestion from '../Login/LoginGestion'

const LoginStack = createStackNavigator();

const LoginStackScreen = () => (
  <LoginStack.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: false
    }}>
    <LoginStack.Screen name="Login" component={LoginGestion}/>
  </LoginStack.Navigator>
)

export default function AuthStackNavigator() {
  return (
    <Navigator.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false
      }}>
      <Navigator.Screen name="Login" component={LoginStackScreen} />
    </Navigator.Navigator>
  )
}
