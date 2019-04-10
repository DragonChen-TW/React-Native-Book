import React, {Component} from 'react';
import {View, ScrollView, Text, Button, StyleSheet, Image} from 'react-native';

export class ElseView extends Component{
  render() {
    return (
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Text>Nothing Else</Text>
        <Image style={{height: 400, width: 400}}
          source={require('./img/ddd.png')} />
        <Image style={{height: 400, width: 400}}
          source={{uri: 'https://i.imgur.com/bunXNTE.jpg'}} />
        <Image style={{height: 400, width: 400}}
          source={{uri: 'https://picsum.photos/500/400/?random=1'}} />
      </ScrollView>
    );
  }
}

export class MainView extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Click Me</Text>
        <Text>Hello, a NavigatorIOS</Text>
        <Button title='Detail'
          onPress = {() => {
              this.props.navigation.navigate('Details')
          }}
        ></Button>
      </View>
    );
  }
}

export class Details extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});