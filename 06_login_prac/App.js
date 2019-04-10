import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, View
} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';

import LoginView from './screens/login';
import SignupView from './screens/signup';

const AppStack = createStackNavigator({
// const AppStack = createBottomTabNavigator({
  Login: LoginView,
  Signup: SignupView
}, {
  initialRouteName: 'Signup',
  headerMode: 'none',
});
const AppContainer = createAppContainer(AppStack);

export default class Screen extends Component{
  render() {
    return (
      <AppContainer />
    );
  }
}