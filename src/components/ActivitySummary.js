import React, {useContext} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "./Spacer";
import {Avatar} from "@rneui/themed";

const ActivitySummary = ({activity}) => {
    const session = activity.sessions[0];
    const isoDate = session?.timestamp;
    const date = new Date(isoDate);
    const dateString = date.toLocaleDateString('vi', {weekday: 'long',}) + ', ' + date.toLocaleDateString('en-GB');
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Avatar
                    source={require("../../assets/manswim.jpeg")}
                    size="small"
                    rounded
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.1}

                />
                <View style={styles.containerHeaderText}>
                <Text
                    style={styles.textHugeBold}>{useContext(AuthContext).state.username}</Text>
                <Text
                    style={styles.textNormal}>{dateString} ({activity.type} activity)</Text>
                </View>
            </View>
            <View style={styles.containerIndexRow}>
                <View style={styles.containerIndexCell}>
                    <View>
                        <MaterialCommunityIcons name="heart" size={24}
                                                color="white"/>
                    </View>
                    <View style={styles.containerIndexCellText}>
                        <Text
                            style={styles.textSmall}>Nhịp tim
                        </Text>
                        <Text
                            style={styles.textSmall}>{session?.avg_heart_rate}
                        </Text>

                    </View>
                </View><View style={styles.containerIndexCell}>
                <View>
                    <MaterialCommunityIcons name="swim" size={24}
                                            color="white"/>
                </View>
                <View>
                    <Text
                        style={styles.textSmall}>Khoảng cách
                    </Text>
                    <Text
                        style={styles.textSmall}>{session?.total_distance}km
                    </Text>

                </View>
            </View>
                <View style={styles.containerIndexCell}>
                    <View>
                        <MaterialCommunityIcons name="clock-time-four-outline"
                                                size={24}
                                                color="white"/>
                    </View>

                    <View style={styles.containerIndexCellText}>
                        <Text
                            style={styles.textSmall}>Thời gian
                        </Text>
                        <Text
                            style={styles.textSmall}>{session?.total_timer_time}
                        </Text>
                    </View>
                </View>
            </View>
            <Spacer/>
            <View style={styles.containerIndexRow}>
                <View style={styles.containerIndexCell}>
                    <View>
                        <MaterialCommunityIcons name="eye" size={24}
                                                color="white"/>
                    </View>
                    <View style={styles.containerIndexCellText}>
                        <Text
                            style={styles.textSmall}>Vận tốc
                        </Text>
                        <Text
                            style={styles.textSmall}>{session?.enhanced_avg_speed}/{session?.pool_length}m
                        </Text>

                    </View>
                </View>
                <View style={styles.containerIndexCell}>
                    <View>
                        <FontAwesome5 name="burn"
                                      size={24}
                                      color="white"/>
                    </View>

                    <View style={styles.containerIndexCellText}>
                        <Text
                            style={styles.textSmall}>Calories
                        </Text>
                        <Text
                            style={styles.textSmall}>{session?.total_calories}
                        </Text>
                    </View>
                </View>
                <View style={styles.containerIndexCell}>
                    <View>
                        <MaterialCommunityIcons
                            name="pool" size={24} color="white"/>
                    </View>
                    <View style={styles.containerIndexCellText}>
                        <Text
                            style={styles.textSmall}>Bể bơi
                        </Text><Text
                        style={styles.textSmall}>{session?.pool_length}m</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container             : {
        backgroundColor: '#145BB6',
        marginTop      : 10,
        paddingBottom  : 10,
        paddingTop     : 10,
        borderRadius   : 15,
    },
    containerIndexCell    : {
        flexDirection : 'row',
        justifyContent: 'flex-start',
        width         : '30%',
    },
    containerIndexCellText: {
        paddingLeft: 5,
    },
    containerIndexRow     : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems    : 'center',
        marginLeft    : 10,
    },
    containerRow          : {
        flexDirection: 'row',
    },
    containerHeader: {
        flexDirection : 'row',
        marginLeft  : 10,
        marginBottom: 50,
    },
    containerHeaderText: {
        marginLeft  : 5,
    },
    image                 : {
        width       : 250,
        height      : 120,
        borderRadius: 4,
    },
    video                 : {
        width : 100,
        height: 100,
    },
    textHuge              : {
        fontSize: 18,
        color   : 'white',
    },
    textHugeBold          : {
        fontSize  : 18,
        color     : 'white',
        fontWeight: 'bold',

    },
    textBig               : {
        fontSize: 16,
        color   : 'white',
    },
    textBigBold           : {
        fontSize  : 16,
        color     : 'white',
        fontWeight: 'bold',

    },
    textNormal            : {
        fontSize: 14,
        color   : 'white',
    },
    textNormalBold        : {
        fontSize  : 14,
        color     : 'white',
        fontWeight: 'bold',
    },
    textSmall             : {
        fontSize: 12,
        color   : 'white',
    }

});

export default ActivitySummary;
