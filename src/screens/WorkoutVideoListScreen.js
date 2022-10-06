import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ResultsList from "../components/WorkoutVideoList";
import {Button} from "react-native-elements";

const WorkoutVideoListScreen = ({navigation}) => {
    const videos = [
        {
            id: 1,
            url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            name: 'Freestyle',
            playableDurationMillis: 10000,
        },
        {
            id: 2,
            url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            name: 'Butterfly',
            playableDurationMillis: 10000,

        },
        {
            id: 3,
            url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            name: 'Backstroke',
            playableDurationMillis: 10000,
        },
    ];
    return (
        <>
            <ResultsList results={videos}
                         title="EXAMPLE WORKOUTS"/>
            <Button title="Back"
                    onPress={() => {
                        console.log(' onPress');
                        navigation.navigate('Quest01SkillLevel');
                    }}/>
        </>
    );
};

const styles = StyleSheet.create({});

export default WorkoutVideoListScreen;
