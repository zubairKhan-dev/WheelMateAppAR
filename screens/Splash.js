/* eslint-disable */
import React from "react";
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import AppHeader from "../components/AppHeader";
import Home from "./Home";

export default class Splash extends React.Component {

  constructor(props) {
    super(props);
    setTimeout(()=> {
      return(
          <View>
          <Home />
          </View>
      )
    },2500)
  }

  renderHomeScreen() {
      return(
          <View>
          <Home />
          </View>
      )
  }

  render() {
    return (
      <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
        <View style={{height:'50%', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../src/assets/logo.png')} />
        </View>
        <View style={{height: '50%', width: '100%',flexDirection: 'row'}}>
          <Image source={require('../src/assets/bot_bg.png')} style={{width: '100%',alignSelf: 'flex-end'}} />
        </View>

      </View>
    );
  }
}
