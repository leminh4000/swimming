import React, {useContext} from 'react'

import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return <View style={styles.container}>
        <NavigationEvents
            onWillFocus={clearErrorMessage}
        />
        <AuthForm
            headerText="Sign In to your account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
        />
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
