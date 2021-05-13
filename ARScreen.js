import React, { Component } from 'react';
import {
    AppRegistry,
    ActivityIndicator,
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
    Alert, TouchableOpacity, ScrollView,
} from 'react-native';

import {
    ViroARSceneNavigator, ViroMaterials,
} from 'react-viro';

import renderIf from './js/helpers/renderIf';
import Splash from "./screens/Splash";
import * as Animatable from 'react-native-animatable';
import PermissionsAndroid from "react-native/Libraries/PermissionsAndroid/PermissionsAndroid";
import DialogBox from "./components/DialogBox";
var InitialARScene = require('./js/ARHitTestSample');

// Array of 3d models that we use in this sample. This app switches between this these models.
var objArray = [
    require('./js/res/Ramp1.obj/Ramp1.obj'),
    require('./js/res/ramp3/ramp3.obj'),
    require('./js/res/ramp_with_stair/rampwithstair.obj'),
    require('./js/res/mini_ramp/mini_ramp.obj')];

export default class ARScreen extends Component {
    constructor() {
        super();

        this._onShowObject = this._onShowObject.bind(this);
        this._onShowObjectTwo= this._onShowObjectTwo.bind(this);
        this._onShowObjectThree= this._onShowObjectThree.bind(this);
        this._onShowObjectFour= this._onShowObjectFour.bind(this);
        this._renderTrackingText = this._renderTrackingText.bind(this);
        this._onTrackingInit = this._onTrackingInit.bind(this);
        this._onDisplayDialog = this._onDisplayDialog.bind(this);
        this._onLoadStart = this._onLoadStart.bind(this);
        this._onLoadEnd = this._onLoadEnd.bind(this);
        this._takeScreenshot = this._takeScreenshot.bind(this);

        this.state = {
            viroAppProps: {displayObject:false, objectSource:objArray[0], yOffset:0, _onLoadEnd: this._onLoadEnd, _onLoadStart: this._onLoadStart, _onTrackingInit:this._onTrackingInit, grid: null},
            trackingInitialized: false,
            isLoading: false,
            recording: false,
            showDialogBox: false
        }
    }

    render() {
        return (
            <View style={localStyles.outer} >
                <ViroARSceneNavigator style={localStyles.arView} apiKey="YOUR API KEY"  ref={ARSceneNav => (this.ARSceneNav = ARSceneNav)}
                                      initialScene={{scene:InitialARScene, passProps:{displayObject:this.state.displayObject}}}  viroAppProps={this.state.viroAppProps}
                />

                {this._renderTrackingText()}

                {renderIf(this.state.isLoading,
                    <View style={{position:'absolute', left:0, right:0, top:0, bottom:0, alignItems: 'center', justifyContent:'center'}}>
                        <ActivityIndicator size='large' animating={this.state.isLoading} color='#ffffff'/>
                    </View>)
                }

                <View style={{position: 'absolute',  left: 0, right: 0, bottom: 130, alignItems: 'center'}}>
                    <TouchableHighlight style={localStyles.buttons}
                                        onPress={this._takeScreenshot}
                                        underlayColor={'#00000000'} >
                        <Image source={require("./src/assets/camera.png")} style={{height: 70, width: 70, alignSelf: "center"}} />
                    </TouchableHighlight>
                </View>



                  <View style={{flex: 0.2, flexDirection: 'row', justifyContent: "center", alignItems: 'center', width: "100%"}}>

                      <Animatable.View animation={'bounceIn'} delay={200}>
                      <TouchableOpacity onPress={()=> {this._onShowObject(0, "Ramp 1", 0)}}>
                      <View style={{height: 70, width: 70, borderRadius: 15, marginRight: 40, borderWidth:1, borderColor: 'white',
                          justifyContent: "center", alignItems: "center"}}
                      >
                          <Image source={require('./src/assets/ramp5.png')} style={{height: 50, width: 50}} />
                      </View>
                      </TouchableOpacity>
                      </Animatable.View>

                      <Animatable.View animation={'bounceIn'} delay={400}>
                      <TouchableOpacity onPress={()=> {this._onShowObjectTwo(1, "Ramp 2", .290760)}}>
                      <View style={{height: 70, width: 70, borderRadius: 15,borderWidth:1, borderColor: 'white',
                          justifyContent: "center", alignItems: "center"}}
                      >
                          <Image source={require('./src/assets/wddRamp.png')} style={{height: 50, width: 50}} />
                      </View>
                      </TouchableOpacity>
                      </Animatable.View>

                      <Animatable.View animation={'bounceIn'} delay={600}>
                      <TouchableOpacity onPress={()=> {this._onShowObjectThree(2, "Ramp 3", .497823)}}>
                      <View style={{height: 70, width: 70, borderRadius: 15, marginLeft: 40,borderWidth:1, borderColor: 'white',
                          justifyContent: "center", alignItems: "center"}}
                      >
                          <Image source={require('./src/assets/alRamp.png')} style={{height: 50, width: 50}} />
                      </View>
                      </TouchableOpacity>
                      </Animatable.View>

                      <Animatable.View animation={'bounceIn'} delay={800}>
                      <TouchableOpacity onPress={()=> {this._onShowObjectFour(3, "Ramp 4", .497823)}}>
                          <View style={{height: 70, width: 70, borderRadius: 15, marginLeft: 40,borderWidth:1, borderColor: 'white',
                              justifyContent: "center", alignItems: "center"}}
                          >
                              <Image source={require('./src/assets/miniRamp.png')} style={{height: 50, width: 50}} />
                          </View>
                      </TouchableOpacity>
                      </Animatable.View>
                  </View>




            </View>
        );
    }

    componentDidMount() {
           this.requestCameraPermission();
         }

    requestCameraPermission = async () => {
           try {
             const readGranted = await PermissionsAndroid.request(
               PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              {
                 title: "Allow permission to read",
                 message: "Need access to storage."
               }
             );
             if (readGranted === PermissionsAndroid.RESULTS.GRANTED) {
               console.log("You can use the camera");
             } else {
               console.log("Camera permission denied");
             }

             const writeGranted = await PermissionsAndroid.request(
               PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
               {
                 title: "Allow permission to write",
                 message: "Need access to storage."
               }
             );

             if (writeGranted === PermissionsAndroid.RESULTS.GRANTED) {
               console.log("You can use the camera");
             } else {
               console.log("Camera permission denied");
             }
           } catch (err) {
             console.warn(err);
           }
         };



    _takeScreenshot() {

        this.ARSceneNav.sceneNavigator.takeScreenshot("picture", true);

    }

    // Invoked when a model has started to load, we show a loading indictator.
    _onLoadStart() {
        this.setState({
            isLoading: true,
        });
    }

    // Invoked when a model has loaded, we hide the loading indictator.
    _onLoadEnd() {
        this.setState({
            isLoading: false,
        });

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


    _onDisplayDialog() {
        Alert.alert(
            'Choose an object',
            'Select an object to place in the world!',
            [
                {text: 'Ramp1', onPress: () => this._onShowObject(0, "Ramp 1", 0)},
                {text: 'Ramp2', onPress: () => this._onShowObject(1, "Ramp 2", .290760)},
                {text: 'Ramp3', onPress: () => this._onShowObject(2, "Ramp 3", .497823)},
            ],
        );
    }



    _onShowObject(objIndex, objUniqueName, yOffset) {

        ViroMaterials.createMaterials({grid: {diffuseTexture: require('./js/res/ramp3/Planks016_1K_Color.png')}})
        this.setState({
            viroAppProps:{...this.state.viroAppProps, displayObject: true, yOffset: yOffset, displayObjectName: objUniqueName, objectSource:objArray[objIndex], grid: 'grid' },
        });

    }

    _onShowObjectTwo(objIndex, objUniqueName, yOffset) {

        ViroMaterials.createMaterials({grid: {diffuseTexture: require('./js/res/textures/TKN.CB.peelingpaint.jpg')}})
        this.setState({
            viroAppProps:{...this.state.viroAppProps, displayObject: true, yOffset: yOffset, displayObjectName: objUniqueName, objectSource:objArray[objIndex], grid: 'grid' },
        });

    }

    _onShowObjectThree(objIndex, objUniqueName, yOffset) {

        ViroMaterials.createMaterials({grid: {diffuseTexture: require('./js/res/textures/FCR.CB.brushedmetalrust.jpg')}})
        this.setState({
            viroAppProps:{...this.state.viroAppProps, displayObject: true, yOffset: yOffset, displayObjectName: objUniqueName, objectSource:objArray[objIndex], grid: 'grid' },
        });

    }

    _onShowObjectFour(objIndex, objUniqueName, yOffset) {

        ViroMaterials.createMaterials({grid: {diffuseTexture: require('./js/res/textures/SFX.CB.varnishedwood.jpg')}})
        this.setState({
            viroAppProps:{...this.state.viroAppProps, displayObject: true, yOffset: yOffset, displayObjectName: objUniqueName, objectSource:objArray[objIndex], grid: 'grid' },
        });

    }


}

var localStyles = StyleSheet.create({
    outer : {
        flex : 1,
    },

    arView: {
        flex:0.8,
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
    }
});


module.exports = ARScreen
