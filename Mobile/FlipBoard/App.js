import React, { useEffect } from 'react'
import { Splashscreen } from './js/pages/screens/SplashScreen'
import { AsyncStorage } from 'react-native'
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import HomeStackNavigator from './js/navigation/HomeStackNavigator'
import AuthStackNavigator from './js/navigation/AuthStackNavigator'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';

import { AuthContext } from './js/components/Context'

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme } from 'react-native-paper'

import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import DrawerContent from './js/navigation/DrawerContent'

const RootStack = createStackNavigator();

const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
}

const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
}

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          appIsReady: false,
          isLogged: false
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

    render() {
      if (!this.state.appIsReady) {
         return <RootStack.Screen name={'Splash'} component={Splashscreen} />;
      }
      return <Render/>
    }
}

const Render = ()  => {

  const [userEmail, setUserEmail] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: async (email) => {
      try {
        await AsyncStorage.setItem('userLogged', email)
      } catch(e) {
        console.log(e)
      }
      setUserEmail(email);
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userLogged')
      } catch(e) {
        console.log(e)
      }
      setUserEmail(null)
    },
    signUp: (email) =>  {
      setUserEmail(email);
    }

  }))

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userLogged');
        setUserEmail(userToken);
      } catch(e) {
        console.log(e);
      }
    });
  });

  return (
    <AuthContext.Provider value={authContext}>
    <PaperProvider theme={CustomDefaultTheme}>
    <NavigationContainer theme={CustomDefaultTheme}>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      {console.log(userEmail)}
      {userEmail == null ? (
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      )
      :
        <RootStack.Screen name={'HomeStack'} component={HomeStackNavigator} />
      }
      </Drawer.Navigator>
      {/*<RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
      </RootStack.Navigator>*/}
    </NavigationContainer>
    </PaperProvider>
    </AuthContext.Provider>
  );
}
