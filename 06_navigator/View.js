import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';

export default class MainView extends Component{
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Click Me</Text>
                <Text>Hello, a NavigatorIOS</Text>
            </View>
        );
    }
}