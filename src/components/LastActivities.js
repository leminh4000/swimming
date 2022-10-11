import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {withNavigation} from "react-navigation";
import ActivitySummary from "./ActivitySummary";

const LastActivities = ({title, activities, navigation}) => {
    console.log(activities);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                vertical
                data={activities}
                keyExtractor={(activity) => activity._id}
                renderItem={({item}) => {
                    return (
                        <ActivitySummary activity={item}/>
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
