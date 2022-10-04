import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const videos = [
        {
            url: 'https://www.youtube.com/watch?v=S8f9LW_hdeY&ab_channel=LirsTechTips',
            name: 'video'
        },
        {
            url: 'https://www.youtube.com/watch?v=S8f9LW_hdeY&ab_channel=LirsTechTips',
            name: 'video2'
        },
        {
            url: 'https://www.youtube.com/watch?v=S8f9LW_hdeY&ab_channel=LirsTechTips',
            name: 'video3',
        },
    ];
    return (
        <>
            <ScrollView>

                    <ResultsList results={videos}
                                 title="Cost Effective"/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
