/* eslint-disable */
import React from "react";
import * as Animatable from 'react-native-animatable';
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import Swiper from 'react-native-swiper'
import AppHeader from "../components/AppHeader";
import theme from "../util/theme";
import ARScreen from "../ARScreen";


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      loadAr: false
    }

  }

  render() {
    if (this.state.loadAr== false)
    return (
      <View style={{flex: 1}}>
        <Animatable.View animation={'fadeInDown'}>
        <AppHeader name={'WHEEL MATE'} />
        </Animatable.View>

        <Animatable.View animation={'bounceIn'} delay={200}>
        <View style={{height: 160,width: 370, alignSelf: "center", marginTop: 25, borderRadius: 15, flexDirection: 'row', backgroundColor: 'white', elevation:7}}>

          <View style={{backgroundColor: 'black', borderRadius: 15, alignItems: 'center', justifyContent: 'center',height: 160, width: 150}}>
            <Image source={require('../src/assets/logo.png')} style={{height: '75%', width: '70%'}} />
          </View>
          <View style={{flex: 1, alignItems: 'center',padding:10}}>
            <Animatable.View animation={'fadeIn'} delay={700}>
            <Text style={styles.regularText}>If safety concerns have led you to look for a handicap ramp for home why not choose
                  the safest walking surface and have a color choice too?</Text>
            </Animatable.View>
          </View>

        </View>
        </Animatable.View>

        <Animatable.View animation={"bounceIn"} delay={400}>
        <View style={{height: 450}}>
        <Swiper showsButtons={false} autoplay={true} >
          <View style={styles.slide1}>
            <Text style={[styles.text,{marginLeft: 20, marginTop: 10}]}>Basic</Text>
            <Image source={{uri: 'https://nationalramp.com/assets/media/homeaccess/2018/10/MainImg_0006_Victory_wide-1024x480.jpg'}}
                   style={{height: 200, width: 340, alignSelf: 'center', marginTop: 10, borderRadius: 15}}
            />
            <Animatable.View animation={'fadeIn'} delay={700}>
            <Text style={[styles.regularText, {alignSelf: 'center', marginTop: 10, paddingHorizontal:12}]}>
              This Wood Modular Deck si constructed of premium southern yellow pine and pressure treated to prevent rotting
            </Text>
            </Animatable.View>
          </View>
          <View style={styles.slide2}>
            <Text style={[styles.text,{marginLeft: 20, marginTop: 10}]}>Liberty</Text>
            <Image source={{uri: 'https://nationalramp.com/assets/media/homeaccess/2018/10/MainImg_0006_Victory_wide-1024x480.jpg'}}
                   style={{height: 200, width: 340, alignSelf: 'center', marginTop: 10, borderRadius: 15}}
            />
            <Animatable.View animation={'fadeIn'} delay={700}>
            <Text style={[styles.regularText, {alignSelf: 'center', marginTop: 10, paddingHorizontal:12}]}>
             Whether you use a wheelchair or simply need some added assistance, the solid surface aluminium deck is the perfect solution for your home
            </Text>
            </Animatable.View>
          </View>
          <View style={styles.slide3}>
            <Text style={[styles.text,{marginLeft: 20, marginTop: 10}]}>Latitude</Text>
            <Image source={{uri: 'https://nationalramp.com/assets/media/homeaccess/2018/10/MainImg_0006_Victory_wide-1024x480.jpg'}}
                   style={{height: 200, width: 340, alignSelf: 'center', marginTop: 10, borderRadius: 15}}
            />
            <Animatable.View animation={'fadeIn'} delay={700}>
            <Text style={[styles.regularText, {alignSelf: 'center', marginTop: 10, paddingHorizontal:12}]}>
              National Ramp's commercial solid surface aluminium access ramps are the perfect solution for your business needs.
            </Text>
            </Animatable.View>
          </View>
        </Swiper>
        </View>
        </Animatable.View>

          <Animatable.View animation={'bounceIn'} delay={600}>
          <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <Animatable.View animation={'fadeIn'} delay={700}>
              <Text style={styles.buttonText}>Start Exploring</Text>
            </Animatable.View>
          </TouchableOpacity>
          </Animatable.View>


        </View>

    );
    else if (this.state.loadAr)
      return <ARScreen />
  }

}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    height:380,
    width:370,
    backgroundColor: 'white',
    borderRadius:15,
    alignSelf: 'center',
    marginTop: 20,
    elevation:7,
  },
  slide2: {

    height:380,
    width:370,
    backgroundColor: 'white',
    borderRadius:15,
    alignSelf: 'center',
    marginTop: 20,
    elevation:7
  },
  slide3: {

    height:380,
    width:370,
    backgroundColor: 'white',
    borderRadius:15,
    alignSelf: 'center',
    marginTop: 20,
    elevation:7
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: theme.DEFAULT_FONT
  },
  regularText: {
    color: '#000000',
    fontFamily: theme.DEFAULT_FONT,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#000000',
    height: 70,
    width: 250,
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: 10,
    justifyContent: 'center',
    elevation: 7
  },
  buttonText: {
    color: 'white',
    fontWeight: theme.FONT_WEIGHT_BOLD,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: theme.BOLD_FONT,
    elevation: 7,

  },
  endView: {
    backgroundColor: '#000000',
    height: 120,
    width: '100%',
    marginTop: 50
  }
})


