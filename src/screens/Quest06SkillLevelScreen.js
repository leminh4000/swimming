import React, {useContext, useState} from 'react'

import {View, StyleSheet, Text} from 'react-native';
import {ButtonGroup} from "@rneui/themed";
import NextButton from "../components/NextButton";
import {Context as SwimContext} from "../context/SwimContext";

const Quest06SkillLevelScreen = ({navigation}) => {
    const {state, setLevel, clearErrorMessage} = useContext(SwimContext);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const buttons = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
    ];
    const level= "3";
    return (<>
        <View style={styles.container}>
            <View style={{marginTop: 20}}>
                <Text style={styles.textBig}>What days do you usually
                    swim?</Text>
            </View>
            <View>
                <ButtonGroup
                    buttons={buttons}
                    selectedIndex={selectedIndex}
                    onPress={(value) => {
                        setSelectedIndex(value);
                        console.log(selectedIndex);
                    }}
                    containerStyle={styles.buttonGroupContainer}
                />
            </View>
        </View>
        <NextButton nextScreen='MainFlow'
                    navigation={navigation} onSubmit={()=>{
                        setLevel({level});
        }}>
        </NextButton>
    </>)
};

Quest06SkillLevelScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    container           : {
        flex           : 8,
        backgroundColor: 'midnightblue',
        flexDirection  : 'column',
        alignItems     : 'center',
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

})

export default Quest06SkillLevelScreen;
