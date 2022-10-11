import React, {useState} from 'react'

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonGroup} from "@rneui/themed";
import {Video} from "expo-av";
import {Button} from "react-native-elements";
import NextButton from "../components/NextButton";

const Quest03SkillLevelScreen = ({navigation}) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [selectedIndex, setSelectedIndex] = useState(0);
    const buttons = [
        '1',
        '2',
        '3',
        '4',
        '5'
    ];
    return (<>
        <View style={styles.container}>
            <View style={{marginTop: 20}}>
                <Text style={styles.textBig}>Which length pool do you usually swim in?</Text>
            </View>
            <View>
                 <Button buttonStyle={styles.button} title="25 Meters"/>
                 <Button buttonStyle={styles.button} title="50 Meters"/>
                 <Button buttonStyle={styles.button} title="75 Meters"/>
                 <Button buttonStyle={styles.button} title="100 Meters"/>
            </View>
        </View>
        <NextButton nextScreen='Quest04SkillLevel'
                    navigation={navigation}>
        </NextButton>
    </>)
};

/*Quest03SkillLevelScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}*/

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
        textAlign      : "center",
        marginBottom   : 10,
        width          : 400,
        // flexDirection  : 'column',
        // alignContent   : 'space-between',
        alignItems     : 'center',
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
        height         : 50,
        color : "green",
        fontColor : "green",
        marginBottom   : 20,

    },

})

export default Quest03SkillLevelScreen;
