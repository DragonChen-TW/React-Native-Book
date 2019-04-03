import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import BodyIndex from './components/body_index';

export default class Body extends React.Component{
  render(){
    return (
      <View style={style.container}>
        <BodyIndex />
      </View>
    )
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
