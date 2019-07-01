import React, { Component } from 'react';
import {
    View,
    Image, Button
} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import Constants from 'expo-constants';
// 
import styles from './style';

export default class CameraView extends Component {
    state = {
        avatarSource: null,
        videoSource: null
    };
    
    render() {
        let {image} = this.state;

        return (
            <View style={styles.container}>
                <Button
                    title="Pick an image"
                    onPress={this._pickImage}
                />
                {image &&
                    <Image source={{uri:image}} style={{width: 200, height: 200}}/>
                }
            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);
        
        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }
}
