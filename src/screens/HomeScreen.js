import React, {useCallback, useContext, useState} from 'react'

import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {Avatar} from "@rneui/themed";
import {Context as AuthContext} from "../context/AuthContext";
import AchivementIndex from "../components/AchivementIndex";


const HomeScreen = ({navigation}) => {
    const arIndex = {
        "avg_heart_rate"    : "115 bpm",
        "enhanced_avg_speed": "2p:50m",
        "total_calories"    : "288 calories",
        "total_distance"    : "0.0016 km",
        "total_timer_time"  : "00:34 phút"
    };
    const today = new Date();
    const dateString = today.toLocaleDateString('vi', {weekday: 'long',}) + ', ' + today.toLocaleDateString('en-GB');

    return <View style={styles.container}>
        <Text style={{
            color       : "#145BB6",
            fontSize    : 20,
            marginBottom: 10
        }}>{"Hoạt động của bạn"}</Text>
        <AchivementIndex result={arIndex} dateString={dateString}
                         username={useContext(AuthContext).state.username}/>
        <TouchableOpacity onPress={() => {
            return navigation.navigate('Activities');
        }}>
            <View style={styles.containerTextButton}>
                <Text style={styles.textButton}>Xem chi tiết</Text>
            </View>
        </TouchableOpacity>
    </View>
};

HomeScreen.navigationOptions = () => {
    return {
        headerTitle: "",
        headerLeft : () => {
            return (
                <View style={{flexDirection: "row"}}>

                    <Avatar
                        source={require("../../assets/avatar1.jpg")}
                        size="small"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.1}

                    />
                    <View>
                        <Text
                            style={styles.textHeader}>Chào {useContext(AuthContext).state.username}</Text>
                        <Text style={styles.textHeaderSmall}>Hôm
                            nay {new Date().toLocaleDateString('en-GB')}</Text>
                    </View>
                </View>
            );
        },
    };
};

const styles = StyleSheet.create({
    textHeader         : {
        fontSize   : 18,
        color      : '#FFFFFF',
        fontWeight : 'bold',
        paddingLeft: 5,
    },
    textHeaderSmall    : {
        fontSize   : 14,
        color      : '#FFFFFF',
        paddingLeft: 5,
    },
    containerTextButton: {
        borderColor: 'black',
        borderWidth: 1,
        width      : 100,
        height     : 30,
        alignItems : 'center',
    },
    textButton         : {
        fontSize: 14,
        color   : 'black',
    },
    container          : {
        alignContent: 'center',
    },


})


export default HomeScreen;
