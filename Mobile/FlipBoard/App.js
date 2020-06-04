import React from 'react'
import { Splashscreen } from './js/pages/screens/SplashScreen'
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './js/navigation/HomeStackNavigator'
import AuthStackNavigator from './js/navigation/AuthStackNavigator'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper'

import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import DrawerContent from './js/navigation/DrawerContent'

const RootStack = createStackNavigator();

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          appIsReady: false,
        }
    }

    async componentDidMount() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
        this.prepareResources();
    }


    prepareResources = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({ appIsReady: true }, async () => {
        await SplashScreen.hideAsync();
      });
    };

    renderScreens() {
      if (!this.state.appIsReady) {
          return <RootStack.Screen name={'Splash'} component={Splashscreen} />;
      }
      // return <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      return <RootStack.Screen name={'HomeStack'} component={HomeStackNavigator} />
    }

    render() {
      return (
        <PaperProvider theme={PaperDarkTheme}>
        <NavigationContainer theme={DarkTheme}>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            {this.renderScreens()}
          </Drawer.Navigator>
          {/*<RootStack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}>
          </RootStack.Navigator>*/}
        </NavigationContainer>
        </PaperProvider>
      );
    }
}
