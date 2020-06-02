import React from 'react'
import {
  Text
} from 'native-base';
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Profile extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
      return (
        <View>
          <SafeAreaView/>
          <Text>You are in the Profile Page</Text>
        </View>
      )
    }
}
