import React, {useState} from 'react'

import {View, StyleSheet, Text} from 'react-native';
import {CheckBox, Icon} from "@rneui/themed";
import NextButton from "../components/NextButton";

const Quest02SkillLevelScreen = ({navigation}) => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);


    return (
        <>

            <View style={styles.container}>
                <>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.textBig}>What are your swimming
                            goals
                        </Text>
                    </View>
                    <CheckBox
                        // center
                        title='Just Getting Started'
                        checkedIcon={
                            <Icon
                                name="check-circle"
                                type="feather"
                                color="green"
                                size={25}
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        uncheckedIcon={
                            <Icon
                                name="plus-circle"
                                type="feather"
                                color="grey"
                                size={25}
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        checked={check1}
                        onPress={() => {
                            setCheck1(!check1);
                            console.log("check1", check1);
                        }}
                    />
                    <CheckBox
                        // center
                        title='Swim Faster'
                        checkedIcon={
                            <Icon
                                name="check-circle"
                                type="feather"
                                color="green"
                                size={25}
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        uncheckedIcon={
                            <Icon
                                name="plus-circle"
                                type="feather"
                                color="grey"
                                size={25}
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        checked={check2}
                        onPress={() => setCheck2(!check2)}
                    />
                    <CheckBox
                        // center
                        title='Improve Endurance'
                        checkedIcon={
                            <Icon
                                name="check-circle"
                                type="feather"
                                color="green"
                                size={25}
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        uncheckedIcon={
                            <Icon
                                name="plus-circle"
                                type="feather"
                                color="grey"
                                size={25}
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        checked={check3}
                        onPress={() => setCheck3(!check3)}
                    />

                    <CheckBox
                        // center
                        title='Weight Loss'
                        checkedIcon={
                            <Icon
                                name="check-circle"
                                type="feather"
                                color="green"
                                size={25}
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        uncheckedIcon={
                            <Icon
                                name="plus-circle"
                                type="feather"
                                color="grey"
                                size={25}
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        checked={check4}
                        onPress={() => setCheck4(!check4)}
                    />

                    <CheckBox style={styles.checkBox}
                        // center
                              title='Improve Technique'
                              checkedIcon={
                                  <Icon
                                      name="check-circle"
                                      type="feather"
                                      color="green"
                                      size={25}
                                      iconStyle={{marginRight: 10}}
                                  />
                              }
                              uncheckedIcon={
                                  <Icon
                                      name="plus-circle"
                                      type="feather"
                                      color="grey"
                                      size={25}
                                      iconStyle={{marginRight: 10}}
                                  />
                              }
                              checked={check5}
                              onPress={() => setCheck5(!check5)}
                    />

                    <CheckBox
                        // center
                        title='Fitness'

                        checkedIcon={
                            <Icon
                                name="check-circle"
                                type="feather"
                                color="green"
                                size={25}
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        uncheckedIcon={
                            <Icon
                                name="plus-circle"
                                type="feather"
                                color="grey"
                                size={25}
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        checked={check4}
                        onPress={() => setCheck4(!check4)}
                    />

                </>
            </View>
            <NextButton nextScreen='Quest03SkillLevel'
                        navigation={navigation}>
            </NextButton>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: 'blue',
        flexDirection: 'column',
        // alignItems: '',
    }, textBig: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,
        marginTop: 20,
        marginBottom: 20,

    }, textNormal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,

    }, textHuge: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,

    }, textLink: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 100,
        marginLeft: 80,
        marginRight: 80,

    }, textUpper: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginTop: 100,
        marginLeft: 80,
        marginRight: 80,

    }, buttonGroupContainer: {
        backgroundColor: "blue", color: "yellow", textAlign: "center", // paddingVertical : 5,
        marginBottom: 10, width: 300,
    }, video: {
        width: 100, height: 100,
    }, buttonContainer: {
        flex: 1,
        backgroundColor: "blue",
        flexDirection: 'column',
        alignItems: 'center',
    }, button: {
        width: 250,
        height: 60,
        marginBottom: 20,
        backgroundColor: "mediumturquoise",

    }, checkBox: {
        backgroundColor: "blue"
    },


})

export default Quest02SkillLevelScreen;
