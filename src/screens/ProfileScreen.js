import React, {useContext} from 'react'

import {View, StyleSheet, Text} from 'react-native';
import {Button} from "react-native-elements";
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "../components/Spacer";

const ProfileScreen = () => {
    const {signout} = useContext(AuthContext);
    console.log(signout);
    return <>
        <Text style={{fontSize: 48}}>ProfileScreen</Text>
        <Spacer/>
        <Button title="Sign Out" onPress={signout}/>
    </>
};

const styles = StyleSheet.create({})

export default ProfileScreen;
