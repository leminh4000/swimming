import React, { useContext } from 'react';
import { Context as ArchivementContext } from '../context/ArchivementContext';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { NavigationEvents } from 'react-navigation';
import Intermediate from '../components/Intermediate';

const HistoryScreen = () => {
  const { state, fetchArchivements } = useContext(ArchivementContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchArchivements} />
      <View>
        <ScrollView>
          <View style={{ marginTop: 24 }}>
            <Intermediate />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: 'midnightblue',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textBig: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginLeft: 80,
    marginRight: 80,
    marginTop: 20,
    marginBottom: 20,
  },
  textNormal: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginLeft: 80,
    marginRight: 80,
  },
  textHuge: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginLeft: 80,
    marginRight: 80,
  },
  textLink: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 100,
    marginLeft: 80,
    marginRight: 80,
  },
  textUpper: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginTop: 100,
    marginLeft: 80,
    marginRight: 80,
  },
  buttonGroupContainer: {
    backgroundColor: 'blue',
    color: 'yellow',
    textAlign: 'center', // paddingVertical : 5,
    marginBottom: 10,
    width: 300,
  },
  video: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 60,
    marginBottom: 20,
    backgroundColor: 'mediumturquoise',
  },
});

export default HistoryScreen;
