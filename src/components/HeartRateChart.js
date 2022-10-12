import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {LineChart} from "react-native-chart-kit";

const HeartRateChart = ({records})=>{
    return (
        <View>
            <Text>HEART RATE</Text>
            <LineChart
                data={{
                    datasets: [
                        {
                            data: records.map(record => record.heart_rate)
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={20} // optional, defaults to 1
                chartConfig={{
                    backgroundColor       : "brown",
                    backgroundGradientFrom: "brown",
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

export default HeartRateChart;
