import React, {useContext, useState} from 'react'

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import NextButton from "../components/NextButton";
import {Context as SwimContext} from "../context/SwimContext";

const Quest01SkillLevelScreen = ({navigation}) => {
    const {
        state,
        setGender
    } = useContext(SwimContext);
    React.useRef(null);
    return (<>
        <View style={styles.container}>
            <Text style={styles.textBold}>How do you identify yourself?</Text>
            <Text style={styles.textRegular}>We ask this to make sure your
                journey is fun, healthy and balanced</Text>
            <TouchableOpacity style={styles.containerButton} onPress={() => {
                setGender('Male');
            }}>
                <Text style={styles.textButton}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton} onPress={() => {
                setGender('Female');
            }}>
                <Text style={styles.textButton}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton} onPress={() => {
                setGender('Non-binary');
            }}>
                <Text style={styles.textButton}>Non-binary</Text>
            </TouchableOpacity>

        </View>
        <NextButton nextScreen='Quest02SkillLevel'
                    navigation={navigation}>
        </NextButton>
    </>)
};

/*Quest01SkillLevelScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}*/

const styles = StyleSheet.create({
    container      : {
        flex         : 8,
        flexDirection: 'column',
        alignItems   : 'center',
    },
    containerButton: {
        backgroundColor: 'green',
        justifyContent : "center",
        alignItems     : 'center',
        width          : '90%',
        height         : 50,
        marginTop      : 30,
    },

    textBold   : {
        fontSize         : 14,
        fontWeight       : 'bold',
        textAlign        : 'center',
        textAlignVertical: "center",
        marginLeft       : 80,
        marginRight      : 80,
    },
    textButton : {
        fontSize  : 20,
        fontWeight: 'bold',
    },
    textRegular: {
        fontSize   : 14,
        textAlign  : 'center',
        marginLeft : 40,
        marginRight: 40,

    },
    textLink   : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,
    },

})

export default Quest01SkillLevelScreen;
