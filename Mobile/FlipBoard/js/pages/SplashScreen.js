import React, {Component} from "react";
import {Container, Spinner, View} from 'native-base';

export default class SplashScreen extends Component {

    render() {
        return (
            <Container style={{backgroundColor: '#c60000'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Spinner color='#fff'/>
                </View>
             </Container>
        );
    }
}
