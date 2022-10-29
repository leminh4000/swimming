import React, {useContext} from 'react'

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from "@rneui/themed";
import {Context as AuthContext} from "../context/AuthContext";
import LastActivities from "../components/LastActivities";
import {Context as ActivityContext} from "../context/ActivityContext";
import {NavigationEvents} from "react-navigation";
import {Context as SwimContext} from "../context/SwimContext";
import {Context as ArchivementContext} from "../context/ArchivementContext";


const HomeScreen = ({navigation}) => {
    const {
        state,
        getLastActivities,
    } = useContext(ActivityContext);
    const {signout} = useContext(AuthContext);

    let swimContext = useContext(SwimContext);
    const {fetchMaxLevel}  = swimContext;

    async function fetch() {
        await getLastActivities();
        await fetchMaxLevel();

    }

    return <>
        <NavigationEvents onWillFocus={fetch}/>
        <View style={styles.container}>
            <Text style={styles.textTitle}>{"Hoạt động của bạn"}</Text>

            <View style={styles.containerActivity}>
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
                <TouchableOpacity onPress={signout}>
                    <View style={styles.containerButton}>
                        <View style={styles.containerTextButton}>
                            <Text style={styles.textButton}>Signout</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/*<Text>level{swimContext.state.maxLevel}</Text>*/}
            </View>
        </View>
    </>
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
        color         : "#145BB6",
        fontSize      : 14,
        fontWeight    : "bold",
        marginBottom  : 10,
        justifyContent: "flex-start",
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
    containerButton    : {
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
    containerActivity  : {},
    container          : {
        padding: 10,
    },


})


export default HomeScreen;
