import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const AchivementIndex = ({result}) => {
    console.log("result", result)
    return (
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <View style={styles.containerColumn}>
                    <Text style={{
                        ...styles.cellBig,
                        backgroundColor: '#FB5049',
                    }}>{result.avg_heart_rate}</Text>
                    <Text style={{
                        ...styles.cell,
                        backgroundColor: '#343434',
                    }}>{result.total_calories}</Text>
                </View>
                <View style={styles.containerColumn}>
                    <Text style={{
                        ...styles.cell,
                        backgroundColor: '#F2A861',
                    }}>{result.total_distance}</Text>
                    <Text style={{
                        ...styles.cell,
                        backgroundColor: '#5D7AF2',
                    }}>{result.enhanced_avg_speed}</Text>
                    <Text style={{
                        ...styles.cell,
                        backgroundColor: '#1B9BAA',
                    }}>{result.total_timer_time}</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    containerRow   : {
        flexDirection: 'row',
        // width : 200,
        // justifyContent: 'space-between',
        // flex: 1,
    },
    containerColumn: {
        width: '50%',
        // width: 200,
        // height: 600,
    },
    cellBig        : {
        // width : 100,
        height: 110,
        margin: 5,
    },
    cell           : {
        // width: 200,
        height         : 50,
        textColor      : 'green',
        margin: 5,

    },
    container      : {
        width         : '95%',
        // height        : '20%',
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems    : 'center',
    },
    image          : {
        width       : 250,
        height      : 120,
        borderRadius: 4,
    },
    video          : {
        width : 100,
        height: 100,
    },
    text           : {
        fontSize: 16,
        weight  : 'bold',
        color   : 'purple',
    },
    button         : {
        fontSize       : 16,
        weight         : 'bold',
        color          : 'blue',
        foregroundColor: 'blue',
    },
});

export default AchivementIndex;
