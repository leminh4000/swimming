import React, {useContext, useState} from 'react'

import {View, StyleSheet, Text} from 'react-native';
import {CheckBox, Icon} from "@rneui/themed";
import NextButton from "../components/NextButton";
import {Input} from "@rneui/base";
import {Context as SwimContext} from "../context/SwimContext";

const Quest02SkillLevelScreen = ({navigation}) => {
    const {
        state,
        setHeight,
        setWeight,
    } = useContext(SwimContext);
    return (
        <>
            <View style={styles.container}>
                <Input placeholder={'Chiều cao (cm)'}
                       onChangeText={value => setHeight(value)}/>
                <Input placeholder={'Cân nặng (kg)'}
                       onChangeText={value => setHeight(value)}/>
            </View>
            <NextButton nextScreen='Quest03SkillLevel'
                        navigation={navigation}
            />
        </>

    );
};

const styles = StyleSheet.create({
    container           : {
        flex         : 8,
        flexDirection: 'column',
    },
    textBig             : {
        fontSize    : 18,
        fontWeight  : 'bold',
        color       : 'white',
        textAlign   : 'center',
        marginLeft  : 80,
        marginRight : 80,
        marginTop   : 20,
        marginBottom: 20,

    },
    textNormal          : {
        fontSize   : 14,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginLeft : 80,
        marginRight: 80,

    },
    textHuge            : {
        fontSize   : 40,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginLeft : 80,
        marginRight: 80,

    },
    textLink            : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,

    },
    textUpper           : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'green',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,

    },
    buttonGroupContainer: {
        backgroundColor: "blue",
        color          : "yellow",
        textAlign      : "center", // paddingVertical : 5,
        marginBottom   : 10,
        width          : 300,
    },
    video               : {
        width : 100,
        height: 100,
    },
    buttonContainer     : {
        flex           : 1,
        backgroundColor: "blue",
        flexDirection  : 'column',
        alignItems     : 'center',
    },
    button              : {
        width          : 250,
        height         : 60,
        marginBottom   : 20,
        backgroundColor: "mediumturquoise",

    },
    checkBox            : {
        backgroundColor: "blue"
    },


})

export default Quest02SkillLevelScreen;
