import React, {useCallback, useContext, useState} from 'react'

import {View, StyleSheet, Text, Button} from 'react-native';
import {Context as ActivityContext} from "../context/ActivityContext";
import LastActivities from "../components/LastActivities";
import {NavigationEvents} from "react-navigation";
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from 'expo-file-system';
import { Buffer } from "buffer";


const MyActivitiesScreen = ({navigation}) => {
    /*const state = [
        {
            "_id"     : "633fe8dd0b2ff2e88eabbdea",
            "type"    : "Garmin",
            "sessions": [
                {
                    "timestamp"         : "2022-09-29T23:41:04.000Z",
                    "total_distance"    : 1000,
                    "total_timer_time"  : 100,
                    "enhanced_avg_speed": "100m/2000",
                    "laps"              : [
                        {
                            "timestamp"         : "2022-10-05T22:58:27.000Z",
                            "start_time"        : "2022-10-05T22:56:33.000Z",
                            "total_elapsed_time": 114.31,
                            "total_timer_time"  : 114.31,
                            "total_calories"    : 18,
                            "num_lengths"       : 2
                        },
                        {
                            "timestamp"         : "2022-10-06T22:58:27.000Z",
                            "start_time"        : "2022-10-06T22:56:33.000Z",
                            "total_elapsed_time": 114.31,
                            "total_timer_time"  : 114.31,
                            "total_calories"    : 19,
                            "num_lengths"       : 2
                        }
                    ]
                }
            ]
        },
        {
            "_id"     : "633fe8dd0b2ff2e88eabbdeb",
            "type"    : "Garmin",
            "sessions": [
                {
                    "timestamp"         : "2022-09-29T23:41:04.000Z",
                    "total_distance"    : 1000,
                    "total_timer_time"  : 100,
                    "enhanced_avg_speed": "100m/2000",
                    "laps"              : [
                        {
                            "timestamp"         : "2022-10-05T22:58:27.000Z",
                            "start_time"        : "2022-10-05T22:56:33.000Z",
                            "total_elapsed_time": 114.31,
                            "total_timer_time"  : 114.31,
                            "total_calories"    : 18,
                            "num_lengths"       : 2
                        },
                        {
                            "timestamp"         : "2022-10-06T22:58:27.000Z",
                            "start_time"        : "2022-10-06T22:56:33.000Z",
                            "total_elapsed_time": 114.31,
                            "total_timer_time"  : 114.31,
                            "total_calories"    : 19,
                            "num_lengths"       : 2
                        }
                    ]
                }
            ]
        },
    {
            "_id"     : "633fe8dd0b2ff2a88eabbdea",
            "type"    : "Garmin",
            "sessions": [
                {
                    "timestamp"         : "2022-09-29T23:41:04.000Z",
                    "total_distance"    : 1000,
                    "total_timer_time"  : 100,
                    "enhanced_avg_speed": "100m/2000",
                    "laps"              : [
                        {
                            "timestamp"         : "2022-10-05T22:58:27.000Z",
                            "start_time"        : "2022-10-05T22:56:33.000Z",
                            "total_elapsed_time": 114.31,
                            "total_timer_time"  : 114.31,
                            "total_calories"    : 18,
                            "num_lengths"       : 2
                        },
                        {
                            "timestamp"         : "2022-10-06T22:58:27.000Z",
                            "start_time"        : "2022-10-06T22:56:33.000Z",
                            "total_elapsed_time": 114.31,
                            "total_timer_time"  : 114.31,
                            "total_calories"    : 19,
                            "num_lengths"       : 2
                        }
                    ]
                }
            ]
        },
        {
            "_id"     : "633fe8dd0b2ff2e88eabbdhb",
            "type"    : "Garmin",
            "sessions": [
                {
                    "timestamp"         : "2022-09-29T23:41:04.000Z",
                    "total_distance"    : 1000,
                    "total_timer_time"  : 100,
                    "enhanced_avg_speed": "100m/2000",
                    "laps"              : [
                        {
                            "timestamp"         : "2022-10-05T22:58:27.000Z",
                            "start_time"        : "2022-10-05T22:56:33.000Z",
                            "total_elapsed_time": 114.31,
                            "total_timer_time"  : 114.31,
                            "total_calories"    : 18,
                            "num_lengths"       : 2
                        },
                        {
                            "timestamp"         : "2022-10-06T22:58:27.000Z",
                            "start_time"        : "2022-10-06T22:56:33.000Z",
                            "total_elapsed_time": 114.31,
                            "total_timer_time"  : 114.31,
                            "total_calories"    : 19,
                            "num_lengths"       : 2
                        }
                    ]
                }
            ]
        },
    ];*/

    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);


    const {
        state,
        fetchActivities,
        addActivities,
    } = useContext(ActivityContext);
    const handleDocumentSelection = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        // alert(result.uri);
        console.log(result);
        const b64string = await FileSystem.readAsStringAsync(result.uri, {encoding: FileSystem.EncodingType.Base64});
        const content = Buffer.from(b64string, 'base64');
            // console.log(content);

            // Create a FitParser instance (options argument is optional)
            const FitParser = require('fit-file-parser').default;
            const fitParser = new FitParser({
                force             : true,
                speedUnit         : 'km/h',
                lengthUnit        : 'km',
                temperatureUnit   : 'kelvin',
                elapsedRecordField: true,
                mode              : 'cascade',
            });

            // Parse your file
            fitParser.parse(content, function (error, data) {
                // Handle result of parse method
                if (error) {
                    console.error(error);
                } else {
                    // console.log(JSON.stringify(data));
                    addActivities(data.activity);
                }

            });
        hideMenu();
    }

    return <>
        <NavigationEvents onWillFocus={fetchActivities}/>

        <View style={styles.container}>
            <View style={styles.menuContainer}>
                <Menu
                    visible={visible}
                    anchor={
                        <Text style={styles.menuButton} onPress={showMenu}>
                            + Log Activity
                        </Text>
                    }
                    onRequestClose={hideMenu}>
                    <MenuItem
                        onPress={handleDocumentSelection}>Add
                        file .FIT</MenuItem>
                    <MenuDivider/>
                    <MenuItem
                        onPress={() => console.log('Clicked Menu item 2')}>Log
                        Mannual Activities</MenuItem>
                </Menu>
            </View>
            {/*<Text style={{fontSize: 48}}>Last Activities</Text>*/}
            <View style={styles.mainContainer}>
                <LastActivities activities={state} title="Last Activities"/>
            </View>
        </View>
    < />
};

const styles = StyleSheet.create({
    container    : {
        flex           : 8,
        backgroundColor: 'midnightblue',
        flexDirection  : 'column',
        // alignItems     : 'center',
    },
    mainContainer: {
        alignItems: 'center',
    },

    menuContainer      : {
        height    : '10%',
        alignItems: 'flex-start',
        margin    : 10,
    },
    menuButtonContainer: {
        flexDirection: 'row',
        height       : '10%',
        alignItems   : 'flex-start',
        margin       : 10,
    },
    menuButton         : {
        fontSize       : 24,
        fontWeight     : 'bold',
        color          : 'white',
        backgroundColor: 'green',
        padding        : 15,
        // borderRadius   : 25,
        // overflow       : 'hidden',

    },
    icon               : {
        // color          : 'white',
        backgroundColor: 'green',
        padding        : 15,
        borderRadius   : 25,
        overflow       : 'hidden',

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


export default MyActivitiesScreen;
