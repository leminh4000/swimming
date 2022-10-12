import React, {useEffect} from 'react'

import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import {NavigationEvents} from "react-navigation";
import HeartRateChart from "../components/HeartRateChart";
import StrockRateChart from "../components/StrockRateChart";
import LapsTimeChart from "../components/LapsRateChart";

const ActivityDetailScreen = ({navigation}) => {
    // const activity = navigation.getParam('activity');
    const lengths = navigation.getParam('lengths');
    const records = navigation.getParam('records');
    const activity = navigation.getParam('activity');

    return (
        <>
            <View>
                <HeartRateChart records={records}/>
                <LapsTimeChart laps={activity.sessions[0].laps}/>
                <StrockRateChart lengths={lengths}/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({})

export default ActivityDetailScreen;
