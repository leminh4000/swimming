import React from 'react';
import {
    View,
    StyleSheet,
    Text, Image,
} from 'react-native';
import {Icon} from "react-native-elements";

const AchivementBadge = ({result, blurRadiuses}) => {
    console.log("result",result);
    console.log("blurRadiuses",blurRadiuses);

    return (
        <View style={styles.container}>
            <Text>{"All badges"}</Text>
            <View style={styles.containerMedal}>
            <Image style={styles.badge} source={require('../../assets/level1Medal.png')} blurRadius={blurRadiuses[0]}/>
            <Image style={styles.badge} source={require('../../assets/level2Medal.png')} blurRadius={blurRadiuses[1]}/>
            <Image style={styles.badge} source={require('../../assets/level3Medal.png')} blurRadius={blurRadiuses[2]}/>
            <Image style={styles.badge} source={require('../../assets/level4Medal.png')} blurRadius={blurRadiuses[3]}/>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerMedal: {
        flexDirection: 'row',
        width: '100%',
        // height: 200,
        justifyContent: 'space-between',
        alignItems    : 'center',
        marginLeft    : 10,
    },
    container: {
        width: '100%',
        // height: 200,
        justifyContent: 'space-between',
        alignItems    : 'center',
        marginLeft    : 10,
    },
    image    : {
        width       : 250,
        height      : 120,
        borderRadius: 4,
    },
    badge    : {
        width       : 100,
        height      : 100,
    },
    video    : {
        width : 100,
        height: 100,
    },
    text     : {
        fontSize: 16,
        weight  : 'bold',
        color   : 'purple',
    },
    button     : {
        fontSize: 16,
        weight  : 'bold',
        color   : 'blue',
        foregroundColor : 'blue',
    },
});

export default AchivementBadge;
