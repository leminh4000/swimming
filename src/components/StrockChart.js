import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {BarChart, LineChart} from "react-native-chart-kit";

const StrockChart = ({activity})=>{
    const lengths=[];
    for (const lap of activity.sessions[0].laps) {
        lengths.push(...lap.lengths);
    }
    let data = lengths.map(length => length.total_strokes);
    return (
        <View>
            <Text style={styles.header}>Số sải tay/ mỗi phút - Average Stroke Rater</Text>

            <LineChart
                data={{
                    datasets: [
                        {
                            data: data
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={20} // optional, defaults to 1
                chartConfig={{
                    backgroundColor       : "blue",
                    backgroundGradientFrom: "green",
                    backgroundGradientTo  : "black",
                    decimalPlaces         : 0, // optional, defaults to 2dp
                    color                 : (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor            : (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style                 : {
                        borderRadius: 11
                    },
                    propsForDots          : {
                        r          : "0",
                        strokeWidth: "0",
                        stroke     : "green",
                    }
                }}
                bezier
                style={{
                    marginVertical: 1,
                    // borderRadius: 16
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    button: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red',
        borderWidth: 0.5,
        borderColor: 'black',

    }
})

export default StrockChart;