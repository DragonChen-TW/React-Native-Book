import React from 'react';
import { View, Text } from 'react-native';

export default class BodyIndex extends React.Component{
  constructor(){
    super();
    this.state = {
      username: 'Parry',
      timer: 0,
      font_s: 20
    };

    setInterval(() => {
      this.setState({timer: this.state.timer + 1})
    }, 100);
  }

  dynamic_font_size(){
      return {
          fontSize: this.state.timer % 100 + 30
      }
  }

  render(){
    setTimeout(() => {
      this.setState({username: 'React'});
    }, 5000);

    return (
      <View style={{alignItems: "center"}}>
        <Text>Timer: {this.state.timer / 10} seconds</Text>
        <Text>Username: {this.state.username}</Text>
        <Text style={this.dynamic_font_size()}>HI</Text>
      </View>
    )
  }
}
