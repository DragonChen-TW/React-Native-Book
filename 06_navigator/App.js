import React from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';

import MainView from './View';

export default class App extends React.Component {
  render() {
    return (
      // <NavigatorIOS
      //   initialRoute={{
      //     title: '主頁面',
      //     component: MainView
      //   }}
      // />
      <MainView style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});