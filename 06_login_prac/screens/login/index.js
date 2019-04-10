import React, {Component} from 'react';
import {
  View, Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

const bg = require('./imgs/login1_bg.png');
const mark = require('./imgs/logo.png');
const lock = require('./imgs/login1_lock.png');
const person = require('./imgs/login1_person.png');

const {width, height} = Dimensions.get('window');

class ImgInputField extends Component{
  render() {
    return (
      <View style={styles.wrapper.inputWrap}>
        <View style={styles.wrapper.iconWrap}>
          <Image source={this.props.icon} style={styles.wrapper.icon} resizeMode="contain" />
        </View>
        <TextInput 
          placeholder={this.props.placeholder} 
          placeholderTextColor="#FFF"
          style={styles.wrapper.input}
          // {this.props.secure ? secureTextEntry : }
          secureTextEntry={this.props.isSecure}
        />
      </View>
    );
  }
}
class OptionField extends Component{
  render() {
    return (
      <TouchableOpacity activeOpacity={.5}>
        <View style={this.props.view_style}>
          <Text style={this.props.text_style}>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class LoginView extends Component{
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={bg}
          style={styles.container.bg} resizeMode='cover'>
          {/* MarkWrap Part */}
          <View style={styles.markWarp.self}>
            <Image source={mark}
              style={styles.markWarp.mark} resizeMode='contain' />
          </View>

          {/* Wrapper */}
          <View style={styles.wrapper.self}>
            <ImgInputField icon={person}
              placeholder='Email' />
            <ImgInputField icon={lock}
              placeholder='Password'
              isSecure={true} />
            <OptionField
              text_style={styles.wrapper.forgotPasswordText}
              text='Forget Password'/>
          </View>

          {/* Sign */}
          <View style={styles.sign.self}>
            {/* <Button title='Sign Up' onPress={this.login.bind(this)}></Button> */}
            <TouchableOpacity activeOpacity={.5} onPress={()=>this.login()}>
              <View style={styles.sign.signin}>
                <Text style={styles.sign.signinText}>
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableHighlight>
              <View style={styles.sign.signupWrap}>
                <Text style={styles.sign.accountText}>Don't have an account? </Text>
                <Text style={styles.sign.signupText} onPress={()=>this.login()}>
                  Sign In
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }

  login() {
    this.props.navigation.navigate('Signup');
  }
}

const container = StyleSheet.create({
  self: {
    flex: 1
  },
  bg: {
    width: width,
    height: height,
  }
});
const markWarp = StyleSheet.create({
  self: {
    flex: 2,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
});
const wrapper = StyleSheet.create({
  self: {
    flex: 1,
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 20,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 20,
  },
});

const sign = StyleSheet.create({
  self: {
    flex: 1
  },
  signin: {
    backgroundColor: "#DD8C48",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginHorizontal: 20
  },
  signinText: {
    color: "#FFF",
    fontSize: 18,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8",
    fontSize: 16,
  },
  signupText: {
    color: "#FFF",
    marginLeft: 5,
    fontSize: 16,
  }
})

const styles = {
  container: container,
  markWarp: markWarp,
  wrapper: wrapper,
  sign: sign,
};