import React, {Component} from 'react';
import {NavigatorIOS} from 'react-native';
import MainTabBar from './components/main';

export default class App extends Component {
  render() {
    return(
      <MainTabBar />
    );
  }
}