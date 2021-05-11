import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet} from "react-native";
import AppHeader from "../components/AppHeader";
import theme from "../util/theme";
import * as Animatable from 'react-native-animatable';

export default class NavigationScreen extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <Animatable.View animation={'slideInDown'}>
                    <AppHeader name={"Navigation Screen"}/>
                </Animatable.View>

                <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                    <Animatable.View animation={'bounceIn'} delay={300}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 25, height:"85%", width: '85%'}}
                                  onPress={this.props.onPressUp}
                >
                    <Image source={require('../src/assets/ramp5.png')} style={{height: 150, width: 150}} />
                    <Text style={[styles.regularText, {marginTop: 30}]}>Lets go ! Explore some ramps</Text>
                </TouchableOpacity>
                    </Animatable.View>
                </View>


                <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                    <Animatable.View animation={'bounceIn'} delay={600}>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', borderRadius: 25,
                     height:"85%", width: '85%', elevation: 15}}
                                  onPress={this.props.onPressDown}
                >
                    <Image source={require('../src/assets/measuringTape.png')} style={{height: 150, width: 150}} />
                    <Text style={[styles.regularText, {marginTop: 30}]}>Have an idea of Area and Cost</Text>
                </TouchableOpacity>
                    </Animatable.View>
                </View>

            </View>
        );
    }

}

const styles= StyleSheet.create({
    regularText: {
        fontFamily: theme.DEFAULT_FONT,
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    viewStyle: {
        width: '90%',
        height: '90%',
        borderRadius: 15,
        elevation: 7
    }
})
