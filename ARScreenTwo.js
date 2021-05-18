import React, { Component } from 'react';
import {
    AppRegistry,
    ActivityIndicator,
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
    Alert, TouchableOpacity,
} from 'react-native';

import {
    ViroARSceneNavigator, ViroMaterials,
} from 'react-viro';

import renderIf from './js/helpers/renderIf';
import Splash from "./screens/Splash";
import ARHitTestSample from './js/ARHitTestSample'
import PermissionsAndroid from "react-native/Libraries/PermissionsAndroid/PermissionsAndroid";
import * as Animatable from 'react-native-animatable';
import theme from "./util/theme";
var InitialARScene = require('./js/ARHitTest');

// Array of 3d models that we use in this sample. This app switches between this these models.
var objArray = [
    require('./js/res/Ramp1.obj/Ramp1.obj'),
    require('./js/res/ramp3/ramp3.obj'),
    require('./js/res/ramp_with_stair/rampwithstair.obj')];

export default class ARScreenTwo extends Component {
    constructor() {
        super();

        this._renderTrackingText = this._renderTrackingText.bind(this);
        this._onTrackingInit = this._onTrackingInit.bind(this);

        this.state = {
            viroAppProps: {_onTrackingInit:this._onTrackingInit, grid: null},
            trackingInitialized: false,
            isLoading: false,
            recording: false
        }
    }

    render() {
        return (
            <View style={localStyles.outer} >
                <ViroARSceneNavigator style={localStyles.arView} apiKey="YOUR API KEY"  ref={ARSceneNav => (this.ARSceneNav = ARSceneNav)}
                                      initialScene={{scene:InitialARScene, passProps:{displayObject:this.state.displayObject}}}  viroAppProps={this.state.viroAppProps}
                />


                    <TouchableOpacity style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top: 30, alignItems: 'center'}} onPress={this.props.onClick}>
                        <Image source={require('./src/assets/reply-message.png')} style={{height: 50, width: 50}} />
                    </TouchableOpacity>


                {renderIf(this.state.isLoading,
                    <View style={{position:'absolute', left:0, right:0, top:0, bottom:0, alignItems: 'center', justifyContent:'center'}}>
                        <ActivityIndicator size='large' animating={this.state.isLoading} color='#ffffff'/>
                    </View>)
                }

                <View style={{ backgroundColor: 'black', alignItems: "center", justifyContent: "center", flex:0.15}}>
                    <Animatable.View animation={'zoomIn'}>
                        <Text style={{fontFamily: theme.DEFAULT_FONT, color: 'white',}}>
                            You can take measurements here !
                        </Text>
                    </Animatable.View>
                </View>


            </View>
        );
    }


    _renderTrackingText() {
        if(this.state.trackingInitialized) {
            return (<View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top: 30, alignItems: 'center'}}>
                <Text style={{fontSize:12, color:"#ffffff"}}>Tracking initialized.</Text>
            </View>);
        } else {
            return (<View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top:30, alignItems: 'center'}}>
                <Text style={{fontSize:12, color:"#ffffff"}}>Waiting for tracking to initialize.</Text>
            </View>);
        }
    }

    _onTrackingInit() {
        this.setState({
            trackingInitialized: true,
        });
    }


}

var localStyles = StyleSheet.create({
    outer : {
        flex : 1,
    },

    arView: {
        flex:1,
    },

    buttons : {
        height: 100,
        width: 100,
        paddingTop:20,
        paddingBottom:20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor:'#00000000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffffff00',
    },
    regularText: {
        fontFamily: theme.DEFAULT_FONT,
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
});


module.exports = ARScreenTwo
