/* eslint-disable */

import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import theme from '../util/theme';
import {View, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-paper/src/components/MaterialCommunityIcon';
import * as Animatable from 'react-native-animatable';
import {Image} from 'react-native';
const DialogBox = (props) => {
    const containerStyle = {backgroundColor: "white", marginLeft: 10, marginRight: 10, height:250,  marginTop: -70
        , borderRadius:3, borderWidth:1, borderColor: theme.PRIMARY_BLUE}
    return (

        <Provider>

            <Portal>



                <Modal visible={props.visible} onDismiss={props.onDismiss} contentContainerStyle={containerStyle}>
                    <View style={{alignItems: 'center', height: 130, backgroundColor: theme.PRIMARY_BLUE, padding: 9}} >
                        <MaterialCommunityIcon name={'comment-alert-outline'} color={'white'} size={110} />
                    </View>




                    <Animatable.View animation={"bounceIn"} style={{flex:1}}>
                        <Text style={{fontFamily: theme.BOLD_FONT, alignSelf: 'center', color: theme.PRIMARY_BLUE, fontSize: 17, paddingHorizontal: 10, marginTop: 10}}>
                            Oh snap !
                        </Text>
                        <Text style={{fontFamily: theme.DEFAULT_FONT, alignSelf: 'center', color: theme.PRIMARY_BLUE, fontSize: 12.5, paddingHorizontal: 10}}>Change a few things up and try submitting again</Text>
                        <TouchableOpacity style={{height: 35, backgroundColor: theme.PRIMARY_BLUE, width: 100, alignSelf: 'center', borderRadius: 12, marginTop: 10, elevation:3}}
                                          onPress={props.onButtonPress}
                        >
                            <Text style={{alignSelf: 'center', color: theme.LIGHT_COLOR, padding:5, fontFamily: theme.DEFAULT_FONT}}>Okay</Text>
                        </TouchableOpacity>
                    </Animatable.View>







                </Modal>

            </Portal>

        </Provider>


    );
};

export default DialogBox
