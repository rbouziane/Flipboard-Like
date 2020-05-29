import React from 'react'
import { Splashscreen } from './js/pages/screens/SplashScreen'
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './js/navigation/HomeStackNavigator'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';

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
      Font.loadAsync({
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
      return <RootStack.Screen name={'HomeStack'} component={HomeStackNavigator} />
    }

    render() {
      return (
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}>
           {this.renderScreens()}
          </RootStack.Navigator>
        </NavigationContainer>
      );
    }
}
