import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {BarChart, LineChart} from "react-native-chart-kit";

const LapsRateChart = ({laps}) => {
    const data = laps.map(lap => lap.total_timer_time);
    return (
        <View>
            <Text style={styles.header}>Thời gian bơi mỗi vòng - Lap(10v)</Text>
            <BarChart
                data={{
                    datasets: [
                        {
                            data: data,
                        },

                    ],
                    config  : {barWidth: 0.1},

                }}
                maxValue={500}
                minValue={0}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel={''}
                chartConfig={{
                    backgroundColor       : '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo  : '#efefef',
                    decimalPlaces         : 0,
                    color                 : (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style                 : {
                        borderRadius: 1,
                    },
                    barPercentage         : 0.2,
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

export default LapsRateChart;
