import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const ActivitySummary = ({activity}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.text1}>{activity.type} Activity</Text>
                <Text
                    style={styles.text1}>{activity.sessions[0]?.timestamp}</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.containerIcon}>
                    <View>
                        <MaterialCommunityIcons name="swim" size={24}
                                                color="white"/>
                    </View>
                    <View>
                        <Text
                            style={styles.text2}>Distance
                        </Text>
                        <Text
                            style={styles.text2}>{activity.sessions[0]?.total_distance}
                        </Text>

                    </View>
                </View>
                <View style={styles.containerIcon}>
                    <View>
                        <MaterialCommunityIcons name="clock-time-four-outline"
                                                size={24}
                                                color="white"/>
                    </View>

                    <View>
                        <Text
                            style={styles.text2}>Duration
                        </Text>
                        <Text
                            style={styles.text2}>{activity.sessions[0]?.total_timer_time}
                        </Text>
                    </View>
                </View>
                <View style={styles.containerIcon}>
                    <View>
                        <MaterialCommunityIcons
                            name="speedometer" size={24} color="white"/>
                    </View>
                    <View>
                        <Text
                            style={styles.text2}>Pace
                        </Text><Text
                        style={styles.text2}>{activity.sessions[0]?.enhanced_avg_speed}</Text>
                    </View>
                </View>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container    : {
        backgroundColor: 'black',
        marginTop: 10,
        paddingBottom: 10,
        paddingTop: 10,
    },
    containerIcon: {
        flexDirection  : 'row',
        justifyContent : 'flex-start',
        // alignItems     : 'center',
        backgroundColor: 'black',
    },
    container2   : {
        flexDirection  : 'row',
        justifyContent : 'space-between',
        alignItems     : 'center',
        marginLeft     : 10,
        backgroundColor: 'black',
    },
    containerRow : {
        flexDirection: 'row',
    },
    container1   : {
        // justifyContent : 'space-between',
        // alignItems     : '',
        marginLeft     : 10,
        marginBottom   : 50,
        backgroundColor: 'black',
    },
    image        : {
        width       : 250,
        height      : 120,
        borderRadius: 4,
    },
    video        : {
        width : 100,
        height: 100,
    },
    text2        : {
        fontSize: 13,
        color   : 'white',
    },
    text1        : {
        fontSize: 11,
        color   : 'white',
    }

});

export default ActivitySummary;
