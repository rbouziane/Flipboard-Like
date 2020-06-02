import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
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
// const NotificationStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen}/>
  </HomeStack.Navigator>
)

const SubscriptionStackScreen = () => (
  <SubscriptionStack.Navigator>
    <SubscriptionStack.Screen name="Subscription" component={SubscriptionScreen}/>
  </SubscriptionStack.Navigator>
)

// const NotificationStackScreen = () => (
//   <NotificationStack.Navigator>
//     <NotificationStack.Screen name="Home" component={HomeScreen}/>
//   </NotificationStack.Navigator>
// )

const ExploreStackScreen = () => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen name="Explore" component={ExploreScreen}/>
  </ExploreStack.Navigator>
)

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen}/>
  </ProfileStack.Navigator>
)

export default function HomeStackNavigator() {
  return (
    <Navigator.Navigator>
      <Navigator.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarIcon: props => (
            <AntDesign name="home" size={props.size} color={props.color} />
          ),
        }}
      />
      <Navigator.Screen name="Subscription" component={SubscriptionStackScreen}
        options={{
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


// <Navigator.Screen name="Notifications" component={NotificationStackScreen}
//   options={{
//     tabBarIcon: props => (
//       <Ionicons name="ios-notifications-outline" size={props.size} color={props.color} />
//     ),
//   }}
// />
