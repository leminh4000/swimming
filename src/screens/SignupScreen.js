import React, {useContext, useEffect, useState} from 'react'

import {View, StyleSheet, Image} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";
import Spacer from "../components/Spacer";
import {Button, Input, Text} from "@rneui/themed";

const SignupScreen = () => {
    const {
        state,
        signup,
        clearErrorMessage,
        tryLocalSignin
    } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        tryLocalSignin();
    }, []);
    return <View style={styles.container}>
        <NavigationEvents
            onWillFocus={clearErrorMessage}
        />
        {/*<AuthForm
            headerText="Sign Up for Go Swimming"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
        />*/}
        {/*<Image
            style={styles.image}
            source={require('../../assets/goswim.png')}
        />*/}
        <Spacer/>
        <Spacer/>
        <Spacer/>
        <Input
            label="User name"
            value={email}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Spacer/>
        <Input
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
        />
        {state.errorMessage ? <Text
            style={styles.errorMessage}>{state.errorMessage}</Text> : null}
        <Spacer>
            {/*<Button color="#145BB6" title={/!*"Sign Up"*!/}*/}
            <Button color="#145BB6" title={"Đăng ký"}
                    onPress={() => signup({
                        username,
                        email,
                        password
                    })}/>
        </Spacer>
        <NavLink
            routeName="Signin"
            // text="Already have an account? Sign in instead"
            text="Bạn đã có tài khoản? Đăng nhập"
        />

    </View>
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    container   : {
        // borderColor: 'red',
        // borderWidth: 10,
        flex          : 1,
        justifyContent: 'center',
        // marginBottom: 200
    },
    image       : {
        width: 50,
        height: 50,
        marginTop     : 200,
        justifyContent: 'center',
    },
    errorMessage: {
        fontSize  : 16,
        color     : 'red',
        marginLeft: 15,
    },
    link        : {
        color: 'blue',
    },
    button      : {
        color: 'red',
    },

})

export default SignupScreen;
