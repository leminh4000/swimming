import React, {useContext, useState} from 'react'

import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";
import Spacer from "../components/Spacer";
import {Button, Input, Text} from "@rneui/themed";

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return <View style={styles.container}>
        <NavigationEvents
            onWillFocus={clearErrorMessage}
        />
        {/*<AuthForm
            headerText="Sign In to your account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
        />*/}
        <>
            <Spacer/>
            <Spacer/>
            <Spacer/>

            <Input
                label="Enter username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer/>
            <Input
                secureTextEntry
                label="Enter password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {state.errorMessage ? <Text
                style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                {/*<Button title={"Sign In"}*/}
                <Button color="#145BB6"  title={"Đăng nhập"}
                        onPress={()=>signin({username, password})}/>
            </Spacer>
        </>
        <NavLink
            routeName="Signup"
            text="Do not have an account? Sign up instead"
        />
    </View>
};

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1, justifyContent: 'center', // marginBottom: 100
    }, errorMessage: {
        fontSize: 16, color: 'red', marginLeft: 15,
    }, link: {
        color: 'blue',
    }

})

export default SigninScreen;
