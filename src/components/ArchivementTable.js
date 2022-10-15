import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {withNavigation} from "react-navigation";

const ArchivementTable = ({
                              title,
                              results,
                              navigation
                          }) => {
    return (
        <View style={styles.container}>
            {/*for testing purposes*/}
            {/*<NavigationEvents onWillFocus={() => {
                console.log("title", title);
                console.log(results);
            }}/>*/}
            <View style={styles.containerTable}>

                <View style={styles.containerTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <FlatList
                    vertical
                    data={results}
                    keyExtractor={(result) => result._id}
                    renderItem={({item}) => {
                        return (<View style={styles.containerRow}>
                            <Text style={styles.textType}>{item.type}</Text>
                            <Text style={styles.textValue}>{item.value}</Text>
                        </View>);
                    }}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title         : {
        fontSize    : 18,
        fontWeight  : 'bold',
        marginLeft  : 10,
        marginBottom: 5,
        color       : 'white', // foregroundColor: 'gray',

    },
    textType      : {
        fontSize: 14,
        color   : 'white',
        width   : '50%',
    },
    textValue     : {
        fontSize  : 16,
        fontWeight: 'bold',
        color     : 'white',
    },
    containerTable: {
        marginBottom: 10,
        width: '95%',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerRow  : {
        marginBottom   : 1,
        backgroundColor: 'black',
        flexDirection  : 'row',
        padding:20,
    },
    containerTitle: {
        // marginTop:20,
        // marginBottom: 10,
        backgroundColor: 'gray',
        borderRadius   : 10,


    },

});

export default withNavigation(ArchivementTable);
