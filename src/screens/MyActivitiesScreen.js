import React, {useContext} from 'react'

import {View, StyleSheet, Text, Button} from 'react-native';
import {Context as ActivityContext} from "../context/ActivityContext";
import LastActivities from "../components/LastActivities";
import {NavigationEvents} from "react-navigation";

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

    const {state, fetchActivities} = useContext(ActivityContext);

    return <>
        <NavigationEvents onWillFocus={fetchActivities}/>
        <View style={styles.container}>
            {/*<Text style={{fontSize: 48}}>Last Activities</Text>*/}
            <LastActivities activities={state} title="Last Activities"/>
        </View>
    < />
};

const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: 'midnightblue',
        flexDirection: 'column',
        alignItems: 'center',
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
        backgroundColor: "blue", color: "yellow", textAlign: "center", // paddingVertical : 5,
        marginBottom: 10, width: 300,
    }, video: {
        width: 100, height: 100,
    }, buttonContainer: {
        flex: 1,
        backgroundColor: "blue",
        flexDirection: 'column',
        alignItems: 'center',
    }, button: {
        width: 250,
        height: 60,
        marginBottom: 20,
        backgroundColor: "mediumturquoise",

    },

})


export default MyActivitiesScreen;
