import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';

export class ElseView extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Nothing Else</Text>
        <Image style={{height: 400, width: 400}}
          source={require('./img/ddd.png')} />
        <Image style={{height: 400, width: 400}}
          source={{uri: 'https://i.imgur.com/bunXNTE.jpg'}} />
      </View>
    );
  }
}

export class MainView extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Click Me</Text>
        <Text>Hello, a NavigatorIOS</Text>
        <Button title='Detail'
          onPress = {() => {
              this.props.navigation.navigate('Details')
          }}
        ></Button>
      </View>
    );
  }
}

export class Details extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export const RootTab = createBottomTabNavigator(
  {
    Home: MainView,
    Details: Details,
    Else: ElseView
  }
);

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});