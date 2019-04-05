import React, {Component} from 'react';
import {NavigatorIOS} from 'react-native';
import MainTabBar from './components/main';

export default class App extends Component {
  render() {
    return(
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: '主頁面',
          component: MainTabBar,
          passProps: {
            id: 1234
          }
        }}
      />
      // <MainTabBar />
    );
  }
}