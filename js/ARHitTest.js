/**
 * Copyright (c) 2017-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React, { Component } from 'react';

import {
    ViroARScene,
    ViroAmbientLight,
    ViroARPlane,
    ViroMaterials,
    ViroNode,
    ViroUtils,
    ViroQuad,
    ViroSpotLight,
    Viro3DObject,
    ViroAnimations, ViroText, ViroImage, ViroFlexView, ViroARPlaneSelector, ViroBox, ViroButton, ViroARSceneNavigator
} from 'react-viro';
import ARScreen from "../ARScreen";

import TimerMixin from    'react-timer-mixin';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight, View, StyleSheet} from "react-native";
import navigationScreen from "../screens/NavigationScreen";

var createReactClass = require('create-react-class');

var ARHitTest = createReactClass({
    mixins: [TimerMixin],

    getInitialState: function() {
        return {
            objPosition: [0,0,0],
            scale:[.2, .2, .2],
            rotation:[0,0,0],
            shouldBillboard : true,
            positionOne: [],
            positionTwo: [],
            positionThree: [],
            getArea: 0,
            getCost: 0,
            getView: true
        }
    },

    render: function() {
        if ( this.state.getView)
        return (
            <ViroARScene ref="arscene" onTrackingInitialized={this._onTrackInit} >
                <ViroAmbientLight color="#ffffff" intensity={200}/>
                <ViroARPlaneSelector minHeight={.5} minWidth={.5} onPlaneSelected={this._onFirstPlaneSelected}>
                    <ViroBox position={[0, 0, 0]} scale={[.05, .05, .05]} materials={["grid"]} />
                </ViroARPlaneSelector>
                <ViroARPlaneSelector minHeight={.5} minWidth={.5} onPlaneSelected={this._onSecondPlaneSelected}>
                    <ViroBox position={[0, .25, 0]} scale={[.5, .5, .5]} materials={["grid"]} />
                </ViroARPlaneSelector>
                <ViroARPlaneSelector minHeight={.5} minWidth={.5} onPlaneSelected={this._onThirdPlaneSelected}>
                    <ViroBox position={[0, .25, 0]} scale={[.5, .5, .5]} materials={["grid"]} />
                </ViroARPlaneSelector>



            </ViroARScene>

        );

        else if (!this.state.getView)
            return (
                <ViroARScene>

                    <ViroText text={this.state.getArea.toString() + 'sqm'} scale={[0.7, 0.7, 0.7]} position={[0, 0, 0]} color={'red'} />
                    <ViroText text={'Rs' + this.state.getCost.toString()} scale={[0.7, 0.7, 0.7]} position={[0, -0.5, 0]} color={'red'}/>

                </ViroARScene>
            )
    },

    _onFirstPlaneSelected() {
        try {
            this.refs["arscene"].getCameraOrientationAsync().then((orientation) => {
                this.refs["arscene"].performARHitTestWithRay(orientation.forward).then((results)=>{

                    if(results.length> 0) {
                        for (var i= 0; i< results.length; i++) {
                            let result= results[i]
                            if (result.type== "ExistingPlaneUsingExtent")
                            {
                                console.log(result.transform.position)
                                this.state.positionOne = result.transform.position
                                console.log(this.state.positionOne)

                            }
                            else   {
                                console.log(result.transform.position)
                                this.state.positionOne = result.transform.position
                                console.log(this.state.positionOne)
                            }
                        }

                        let length = this._distance(this.state.positionOne, this.state.positionTwo)
                        let width = this._distance(this.state.positionTwo, this.state.positionThree)
                        let area = length * width
                        if (area > 0) {
                            this.setState({getArea: area})
                            let cost = area * 50
                            this.setState({getCost: cost})
                            alert('Area = '+area+ ' and Cost = Rs '+cost)
                            if (this.state.getArea > 0 && this.state.getCost > 0) {
                                this.setState({getView: false})
                            }
                        }
                        else {
                            alert("Move to next point")
                        }



                    }
                })
            });
        }
        catch (Error) {
            console.log('Some error you dont need to worry about')
        }
    },

    _onSecondPlaneSelected() {
        try {
            this.refs["arscene"].getCameraOrientationAsync().then((orientation) => {
                this.refs["arscene"].performARHitTestWithRay(orientation.forward).then((results)=>{

                    if(results.length> 0) {
                        for (var i= 0; i< results.length; i++) {
                            let result= results[i]
                            if (result.type== "ExistingPlaneUsingExtent")
                            {
                                this.state.positionTwo = result.transform.position


                            }
                            else  {
                                this.state.positionTwo = result.transform.position
                            }

                        }


                        let length = this._distance(this.state.positionOne, this.state.positionTwo)
                        let width = this._distance(this.state.positionTwo, this.state.positionThree)
                        let area = length * width
                        if (area > 0) {
                            this.setState({getArea: area})
                            let cost = area * 50
                            this.setState({getCost: cost})
                            alert('Area = '+area+ ' and Cost = Rs '+cost)
                            if (this.state.getArea > 0 && this.state.getCost > 0) {
                                this.setState({getView: false})
                            }
                        }
                        else {
                            alert("Move to next point")
                        }

                    }
                })
            });
        }
        catch (Error) {
            console.log('Some error you dont need to worry about')
        }
    },

    _onThirdPlaneSelected() {
        try {
            this.refs["arscene"].getCameraOrientationAsync().then((orientation) => {
                this.refs["arscene"].performARHitTestWithRay(orientation.forward).then((results)=>{

                    if(results.length> 0) {
                        for (var i= 0; i< results.length; i++) {
                            let result= results[i]
                            if (result.type== "ExistingPlaneUsingExtent")
                            {
                                console.log(result.transform.position)
                                this.state.positionThree = result.transform.position
                                console.log(this.state.positionThree)

                            }
                            else  {
                                this.state.positionTwo = result.transform.position
                            }
                        }

                        let length = this._distance(this.state.positionOne, this.state.positionTwo)
                        let width = this._distance(this.state.positionTwo, this.state.positionThree)
                        let area = length * width
                        if (area > 0) {
                            this.setState({getArea: area})
                            let cost = area * 50
                            this.setState({getCost: cost})
                            alert('Area = '+area+ ' and Cost = Rs '+cost)
                            if (this.state.getArea > 0 && this.state.getCost > 0) {
                                this.setState({getView: false})
                            }
                        }
                        else {
                            alert("Move to next point")
                        }

                    }
                })
            });
        }
        catch (Error) {
            console.log('Some error you dont need to worry about')
        }
    },

    _calculateArea() {

        let length= this._distance(this.state.positionOne, this.state.positionTwo)
        let width= this._distance(this.state.positionTwo, this.state.positionThree)
        let area= length * width
        this.state.getArea= area

        console.log(length, width)


    },


    _onTrackInit() {
        this.props.arSceneNavigator.viroAppProps._onTrackingInit();
    },

    _distance(vectorOne, vectorTwo) {
        var distance = Math.sqrt(((vectorTwo[0] - vectorOne[0]) * (vectorTwo[0] - vectorOne[0])) +
            ((vectorTwo[1] - vectorOne[1]) * (vectorTwo[1] - vectorOne[1])) + ((vectorTwo[2] - vectorOne[2]) * (vectorTwo[2] - vectorOne[2])));
        return distance;
    }
});

ViroMaterials.createMaterials({
    grid: {
        diffuseTexture: require('./res/textures/FCR.CB.brushedmetalrust.jpg'),
    },
});

module.exports = ARHitTest;
