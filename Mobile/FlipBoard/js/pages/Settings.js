import React from 'react'
import {
  Text
} from 'native-base';
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Settings extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
      return (
        <View>
          <SafeAreaView/>
          <Text>Settings Page</Text>
        </View>
      )
    }
}
