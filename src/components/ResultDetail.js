import React from 'react';
import {View, TextInput, StyleSheet, Text, FlatList, Image} from 'react-native';
import Video from "react-native-video";

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Video source={result.url}
                   />}
            />
            <Text style={{fontWeight:'bold'}}>{result.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
       marginLeft:10,
    },
    image:{
      width: 250,
      height: 120,
      borderRadius:4,
    },
});

export default ResultsDetail;
