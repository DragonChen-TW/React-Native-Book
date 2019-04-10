import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json


// import {RootTab} from './View';
import {MainView, Details, ElseView} from './View';

const RootTab = createBottomTabNavigator(
  {
    Home: MainView,
    Details: Details,
    Else: ElseView
  }
);
const AppContainer = createAppContainer(RootTab);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
