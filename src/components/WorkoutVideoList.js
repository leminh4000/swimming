import React from 'react';
import {View, TextInput, StyleSheet, Text, FlatList} from 'react-native';
import ResultDetail from "./WorkoutVideoDetail";
import {TouchableOpacity} from "react-native-gesture-handler";
import {withNavigation} from "react-navigation";

const WorkoutVideoList = ({title, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                vertical
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <ResultDetail result={item}/>
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

    },
    container: {
        marginBottom: 10,
    }
});

export default withNavigation(WorkoutVideoList);
