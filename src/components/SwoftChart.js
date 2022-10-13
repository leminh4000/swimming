import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import {BarChart} from "react-native-chart-kit";

const SwoftChart = ({activity}) => {
    const lengths=[];
    for (const lap of activity.sessions[0].laps) {
        lengths.push(...lap.lengths);
    }
    const data = lengths.map(length => length.total_timer_time + length.total_strokes);
    // console.log("data",data);
    return (
        <View>
            <Text style={styles.header}>Số sải tay - SWOLF (/100m)</Text>
            <BarChart
                data={{
                    datasets: [
                        {
                            data: data,
                        },

                    ],
                    config  : {barWidth: 1},

                }}
                maxValue={500}
                minValue={0}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel={''}
                chartConfig={{
                    backgroundColor       : '#1cc910',
                    backgroundGradientFrom: 'white',
                    backgroundGradientTo  : 'white',
                    decimalPlaces         : 0,
                    color                 : (opacity = 1) => `blue`,
                    style                 : {
                        borderRadius: 1,
                    },
                    barPercentage         : 0.3,
                }}
                style={{
                    marginVertical: 1,
                    borderRadius  : 1,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex         : 1,
        flexDirection: 'row',
    },
    button   : {
        flex           : 1,
        height         : 50,
        alignItems     : 'center',
        justifyContent : 'center',
        backgroundColor: 'red',
        borderWidth    : 0.5,
        borderColor    : 'black',

    }
})

export default SwoftChart;
