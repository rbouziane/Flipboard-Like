import React from 'react'
import { Root } from 'native-base'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Navigations from './navigation/Navigations'
import * as SplashScreen from 'expo-splash-screen';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          appIsReady: false,
        }
    }

    async componentDidMount() {
    // Prevent native splash screen from autohiding
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
      this.prepareResources();
    }

   /**
   * Method that serves to load resources and make API calls
   */

   // Put any code you need to prepare your app in these functions
   // async function performAPICalls() {}
   // async function downloadAssets() {}

    prepareResources = async () => {
        // await performAPICalls();
        // await downloadAssets();

        Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ appIsReady: true }, async () => {
          await SplashScreen.hideAsync();
        });
    };

    renderContent() {
        //loading when the app is not ready
        if (!this.state.appIsReady) {
            return null;
        }
        return <Navigations/>
    }

    render() {
        return (
            <Root>
                {this.renderContent()}
            </Root>
        );
    }
}
