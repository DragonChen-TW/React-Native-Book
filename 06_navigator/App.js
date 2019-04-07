import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import {RootTab} from './View';

const AppContainer = createAppContainer(RootTab);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
