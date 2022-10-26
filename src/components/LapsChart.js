import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import {BarChart} from "react-native-chart-kit";

const LapsChart = ({activity}) => {

    const data = activity.sessions[0].laps.map(lap => lap.total_timer_time);
    return (
        <View>
            <Text style={styles.header}>Thời gian bơi mỗi vòng</Text>
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
                    backgroundColor       : 'white',
                    backgroundGradientFrom: 'white',
                    backgroundGradientTo  : 'white',
                    decimalPlaces         : 0,
                    color                 : (opacity = 1) => `#1B9BAA`,
                    labelColor            : (opacity = 1) => `#77838F`,
                    style                 : {
                        borderRadius: 1,
                    },
                    barPercentage         : 0.8,
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
    header: {
        color         : '#1E2022',
        fontSize : 14,
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

export default LapsChart;
