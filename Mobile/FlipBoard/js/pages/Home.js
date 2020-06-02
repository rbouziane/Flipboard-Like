import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Home extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
      return (
        <View>
          <SafeAreaView/>
          <ImageBackground style={{height: 170, width: 178}} source={require('../../assets/flipboardLogo.png')}>
          </ImageBackground>
          <Text>You are in the Home Page</Text>
        </View>
      )
    }
}
