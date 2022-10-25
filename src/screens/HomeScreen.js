import React, {useCallback, useContext, useState} from 'react'

import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {Avatar} from "@rneui/themed";
import {Context as AuthContext} from "../context/AuthContext";
import AchivementIndex from "../components/AchivementIndex";
import LastActivities from "../components/LastActivities";
import {Context as ActivityContext} from "../context/ActivityContext";
import {NavigationEvents} from "react-navigation";


const HomeScreen = ({navigation}) => {
    const {
        state,
        getLastActivities,
    } = useContext(ActivityContext);

    return <View style={styles.container}>
        <NavigationEvents onWillFocus={getLastActivities}/>
        <Text style={styles.textTitle}>{"Hoạt động của bạn"}</Text>
        <View style={styles.mainContainer}>
            <LastActivities activities={state}/>
        </View>
        <TouchableOpacity onPress={() => {
            return navigation.navigate('Activities');
        }}>
            <View style={styles.containerButton}>
                <View style={styles.containerTextButton}>
                    <Text style={styles.textButton}>Xem chi tiết</Text>
                </View>
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
    textTitle          : {
        color       : "#145BB6",
        fontSize    : 14,
        fontWeight  : "bold",
        marginBottom: 10,
    },
    textHeaderSmall    : {
        fontSize   : 14,
        color      : '#FFFFFF',
        paddingLeft: 5,
    },
    containerTextButton: {
        borderColor: 'blue',
        borderWidth: 1,
        width      : 200,
        // height     : 40,
        justifyContent: "center",
        alignItems    : "center",
        padding       : 5,
        paddingLeft   : 10,
        paddingRight  : 10,
    },
    containerButton: {
        justifyContent: "center",
        alignItems    : "center",
        padding       : 20,
    },
    textButton         : {
        fontSize: 14,
        color   : 'black',
        // width: 200,
        // padding: 5,
        // paddingLeft: 10,
        // paddingRight: 10,
        // borderWidth: 1,
        // justifyContent: "center",
        // alignItems    : "center",
    },
    container          : {
        alignContent  : 'center',
        justifyContent: "center",
        alignItems    : "center",
    },


})


export default HomeScreen;
