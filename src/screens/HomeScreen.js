import React, {useCallback, useContext, useState} from 'react'

import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {Context as ActivityContext} from "../context/ActivityContext";
import LastActivities from "../components/LastActivities";
import {NavigationEvents} from "react-navigation";
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from 'expo-file-system';
import {Buffer} from "buffer";
import {Ionicons} from "@expo/vector-icons";
import {
    Item,
    HeaderButton,
    HeaderButtons,
} from "react-navigation-header-buttons";
import {HeaderTitle} from "react-navigation-stack";
import {Avatar} from "@rneui/themed";
import {Context as AuthContext} from "../context/AuthContext";
import ActivitySummary from "../components/ActivitySummary";


const HomeScreen = ({navigation}) => {

    return <View>
        <TouchableOpacity onPress={()=>{
            return navigation.navigate('Activities');
        }}>
            <Text>Xem chi tiết</Text>
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
                        source={require("../../assets/goswim.png")}
                        size="small"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.1}

                    />
                    <View>
                        <Text style={styles.textHeader}>Chào {useContext(AuthContext).state.username}</Text>
                        <Text style={styles.textHeaderSmall}>Hôm nay {new Date().toLocaleDateString('en-GB')}</Text>
                    </View>
                </View>
            );
        },
    };
};

const styles = StyleSheet.create({
    textHeader   : {
        fontSize  : 18,
        color     : '#FFFFFF',
        fontWeight: 'bold',
        paddingLeft:5,
    },
    textHeaderSmall   : {
        fontSize  : 14,
        color     : '#FFFFFF',
        paddingLeft:5,
    },


})


export default HomeScreen;
