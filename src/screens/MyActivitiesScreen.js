import React from 'react'

import {View, StyleSheet, Text, Button} from 'react-native';

const MyActivitiesScreen = ({navigation})=>{
    return <>
        <Text style={{fontSize:48}}>MyActivities</Text>
        <Button title="Go to Track Detail" onPress={()=>navigation.navigate('ActivityDetailScreen')}/>

    < />
};

const styles = StyleSheet.create({})

export default MyActivitiesScreen;
