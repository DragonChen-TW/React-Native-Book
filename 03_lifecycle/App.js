import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor (){
    super();
    this.state = {
      hi: 'hello'
    };
  }

  // load Component
  componentWillMount(){
      console.log('componentWillMount');
  }

  render() {
    console.log("render");
    return (
      <View style={styles.container}>
        <Text>{this.state.hi}</Text>
      </View>
    );
  }

  componentDidMount(){
      console.log('componentDidMount');
  }

  // get new props
  componentWillReceiveProps(nextProps){
      console.log('componentWillReceiveProps');
  }

  // logic should update
  shouldComponentUpdate(nextProps, nextState){
      console.log('shouldComponentUpdate');
  }
}


const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
