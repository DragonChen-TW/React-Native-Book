import React, { Component } from 'react';
import { View } from 'react-native';

export default class ChildView extends Component {
    render() {
        return (<View>
            詳情頁面 {this.props.name}
        </View>);
    }
}
