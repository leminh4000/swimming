import React, {useState} from 'react'

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonGroup} from "@rneui/themed";
import SigninScreen from "./SigninScreen";

const Quest01SkillLevelScreeen = ({navigation}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const buttons = ['1',
                     '2',
                     '3',
                     '4',
                     '5'];
    return (<View style={styles.container}>
        <View style={{marginTop:20}}>
            <Text style={styles.textBig}>What is your swimming skill
                level?</Text>
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
        <View>
            <Text style={styles.textNormal}>Average Workout</Text>
        </View>
        <View>
            <Text style={styles.textHuge}>500</Text>
        </View>
        <View>
            <Text style={styles.textNormal}>meters</Text>
        </View>
        <View>
            <Text style={styles.textLink}>I'm just getting started. I have
                little
                to no swim experience</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
        <View>
            <Text style={styles.textUpper}>VIEW EXAMPLE WORKOUT</Text>
        </View>
        </TouchableOpacity>
    </View>)
};

Quest01SkillLevelScreeen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'blue', flexDirection: 'column',
    }, textBig: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,
        marginTop: 20,
        marginBottom: 20,

    }, textNormal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,

    }, textHuge: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,

    }, textLink: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 100,
        marginLeft: 80,
        marginRight: 80,

    }, textUpper: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginTop: 100,
        marginLeft: 80,
        marginRight: 80,

    }, buttonGroupContainer: {
        backgroundColor: "blue",
        color: "yellow",
        textAlign: "center", // paddingVertical : 5,
        marginBottom: 10
    },

})

export default Quest01SkillLevelScreeen;
