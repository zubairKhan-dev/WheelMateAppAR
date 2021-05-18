import React, { Component } from 'react';
import {RNCamera} from 'react-native-camera';
import {Alert, TouchableOpacity, View} from "react-native";

export default class CameraComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            takingPic: false,
        };
    }

    takePicture = async () => {
        if (this.camera && !this.state.takingPic) {

            let options = {
                quality: 0.85,
                fixOrientation: true,
                forceUpOrientation: true,
            };

            this.setState({takingPic: true});

            try {
                const data = await this.camera.takePictureAsync(options);
                Alert.alert('Success', JSON.stringify(data));
            } catch (err) {
                Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
                return;
            } finally {
                this.setState({takingPic: false});
            }
        }
    };

    render() {
        return (
            <TouchableOpacity onPress={this.takePicture}>
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                captureAudio={false}
                style={{flex: 1}}
                type={RNCamera.Constants.Type.back}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }} />
            </TouchableOpacity>
        );
    }
}
