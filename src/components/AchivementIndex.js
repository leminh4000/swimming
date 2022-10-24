import React from 'react';
import {
    View, StyleSheet, Text,
} from 'react-native';
import {Avatar} from "@rneui/themed";

const AchivementIndex = ({
                             result,
                             username,
                             dateString
                         }) => {
    console.log("result", result);

    return (<View style={styles.container}>
        <View style={styles.containerHeader}>
            <Avatar
                source={require("../../assets/avatar1.jpg")}
                size="small"
                rounded
                onPress={() => console.log("Works!")}
                activeOpacity={0.1}

            />
            <View style={styles.containerHeaderText}>
                <Text
                    style={styles.textHugeBold}>{username}</Text>
                <Text
                    style={styles.textNormal}>{dateString}</Text>
            </View>
        </View>

        <View style={styles.containerRow}>
            <View style={styles.containerColumn}>
                <View style={{
                    ...styles.containerCellBig,
                    backgroundColor: '#FB5049'
                }}>
                    <Text style={styles.cellBig}>{result.avg_heart_rate}
                    </Text>
                </View>
                <View style={{
                    ...styles.containerCell,
                    backgroundColor: '#343434'
                }}>
                    <Text style={styles.cell}>{result.total_calories}</Text>
                </View>
            </View>
            <View style={styles.containerColumn}>
                <View style={{
                    ...styles.containerCell,
                    backgroundColor: '#F2A861'
                }}>
                    <Text style={styles.cell}>{result.total_distance}</Text>
                </View>
                <View style={{
                    ...styles.containerCell,
                    backgroundColor: '#5D7AF2'
                }}>
                    <Text style={styles.cell}>{result.enhanced_avg_speed}</Text>
                </View>

                <View style={{
                    ...styles.containerCell,
                    backgroundColor: '#1B9BAA'
                }}>
                    <Text style={styles.cell}>{result.total_timer_time}</Text>
                </View>

            </View>
        </View>

    </View>);
};

const styles = StyleSheet.create({
    containerRow       : {
        flexDirection: 'row', // width : 200,
        // justifyContent: 'space-between',
        // flex: 1,
    },
    containerHeaderText: {
        marginLeft: 5,
    },
    containerColumn    : {
        width: '50%', // width: 200,
        // height: 600,
    },
    cellBig            : {
        // width : 100,
        // height: 110,
        // margin: 5,
        color   : 'white',
        fontSize: 21,

    },
    containerCellBig   : {
        alignItems  : 'center', // width : 100,
        height      : 110,
        margin      : 5,
        borderRadius: 10,
    },
    containerCell      : {
        alignItems  : 'center', // width : 100,
        height      : 50,
        margin      : 5,
        borderRadius: 10,
    },
    cell               : {
        // width: 200,
        // height   : 50,
        // margin   : 5,
        color   : 'white',
        fontSize: 21,


    },
    container          : {
        width: '95%', // height        : '20%',
        // flexDirection : 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
    containerHeader: {
        flexDirection : 'row',
        marginLeft  : 10,
        marginBottom: 10,
    },


    image              : {
        width       : 250,
        height      : 120,
        borderRadius: 4,
    },
    video              : {
        width : 100,
        height: 100,
    },
    text               : {
        fontSize: 16,
        weight  : 'bold',
        color   : 'purple',
    },
    button             : {
        fontSize       : 16,
        weight         : 'bold',
        color          : 'blue',
        foregroundColor: 'blue',
    },
});

export default AchivementIndex;
