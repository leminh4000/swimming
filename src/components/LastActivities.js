import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {StackActions as lengths, withNavigation} from "react-navigation";
import ActivitySummary from "./ActivitySummary";

const LastActivities = ({title, activities, navigation}) => {
    // console.log(activities);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                vertical
                data={activities}
                keyExtractor={(activity) => activity._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={()=>{
                            const lengths=[];
                            const records=[];
                            for (const lap of item.sessions[0].laps) {
                                lengths.push(...lap.lengths);
                                records.push(...lap.records);
                            }
                            for (const lap of item.sessions[0].laps) {
                                lengths.push(...lap.lengths);
                            }
                            console.log(lengths.map(length => length.total_strokes));
                            console.log(records.map(record => record.heart_rate));
                            return navigation.navigate('ActivityDetail', {activity: item, lengths, records});
                        }}>
                        <ActivitySummary activity={item}/>
                        </TouchableOpacity>
                    );
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
        color: 'white',

    },
    container: {
        width: '95%',
        marginBottom: 10,
    }
});

export default withNavigation(LastActivities);
