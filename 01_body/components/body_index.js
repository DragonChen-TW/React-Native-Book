import React from 'react';
import { View, Text } from 'react-native';

export default class BodyIndex extends React.Component{
  constructor(){
    super();
    this.state = {
      username: 'Parry',
      timer: 0
    };

    setInterval(() => {
      this.setState({timer: this.state.timer + 1})
    }, 1000);
  }

  render(){
    setTimeout(() => {
      this.setState({username: 'React'});
    }, 5000);

    return (
      <View>
        <Text>Timer: {this.state.timer} secs</Text>
        <Text>Username: {this.state.username}</Text>
      </View>
    )
  }
}
