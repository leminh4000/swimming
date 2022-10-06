import React from 'react'
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";

const NextButton = ({
                        navigation,
                        nextScreen,
                        onSubmit
                    }) => {
    return <View style={styles.buttonContainer}>
        <Button title="Next"
                buttonStyle={styles.button} onPress={() => {
            if (!onSubmit) {
                navigation.navigate(nextScreen);
            } else {
                onSubmit();
            }
        }}></Button>
    </View>
};
const styles = StyleSheet.create({
    buttonContainer: {
        // flex: 1,
        backgroundColor: "blue",
        flexDirection  : 'column',
        alignItems     : 'center',
    },
    button         : {
        width          : 250,
        height         : 60,
        marginBottom   : 20,
        backgroundColor: "mediumturquoise",

    },
})

export default NextButton;

