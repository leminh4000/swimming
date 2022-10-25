import React, {useContext} from 'react'

import {View, StyleSheet, Button, Alert, ScrollView} from 'react-native';
import {Context as ActivityContext} from "../context/ActivityContext";
import {NavigationEvents} from "react-navigation";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from 'expo-file-system';
import {Buffer} from "buffer";
import {Context as ArchivementContext} from "../context/ArchivementContext";
import ArchivementTable from "../components/ArchivementTable";
import AchivementIndex from "../components/AchivementIndex";
import AchivementBadge from "../components/AchivementBadge";
import {Context as AuthContext} from "../context/AuthContext";
import LastActivities from "../components/LastActivities";


const MyActivitiesScreen = ({navigation}) => {
    const {
        state,
        fetchDayActivities,
        addActivities,
    } = useContext(ActivityContext);

    let archivementContext = useContext(ArchivementContext);
    const {
        fetchArchivements,
        fetchLevel,
    } = archivementContext;

    function getBlurRadiuses() {
        // console.log("getBlurRadiuses archivementContext.state.level", archivementContext.state.level);
        const level = archivementContext.state.level;
        switch (level) {
            case 0:
                return [
                    4,
                    4,
                    4,
                    4
                ];
            case 1:
                return [
                    0,
                    4,
                    4,
                    4
                ];
            case 4:
                return [
                    0,
                    0,
                    4,
                    4,
                ];
            case 3:
                return [
                    0,
                    0,
                    0,
                    4
                ];
            case 4:
                return [
                    0,
                    0,
                    0,
                    0,
                ];

        }
        return [
            4,
            4,
            4,
            4,
        ];
    }

    const handleDocumentSelection = async () => {
        // console.log('handleDocumentSelection');
        let result = await DocumentPicker.getDocumentAsync({});
        // alert(result.uri);
        // console.log(result);
        const b64string = await FileSystem.readAsStringAsync(result.uri, {encoding: FileSystem.EncodingType.Base64});
        const content = Buffer.from(b64string, 'base64');
        // console.log(content);

        // Create a FitParser instance (options argument is optional)
        const FitParser = require('fit-file-parser').default;
        const fitParser = new FitParser({
            force             : true,
            speedUnit         : 'km/h',
            lengthUnit        : 'km',
            temperatureUnit   : 'kelvin',
            elapsedRecordField: true,
            mode              : 'cascade',
        });

        // Parse your file
        fitParser.parse(content, async function (error, data) {
            // Handle result of parse method
            if (error) {
                console.error(error);
            } else {
                // console.log(JSON.stringify(data));
                const newLevel = await addActivities(data.activity);
                if (newLevel) {
                    Alert.alert(
                        "Chúc mừng",
                        `Bạn đã dành được huy chương level ${newLevel}`,
                        [
                            {
                                text   : "OK",
                                onPress: () => console.log("OK Pressed")
                            }
                        ]
                    );
                    console.log(`Bạn dành được huy chương level ${state.newLevel}`);
                }
            }

        });
        // hideMenu();
    }
    const fetch = () => {
        fetchDayActivities();
        fetchArchivements();
        fetchLevel();
    };
    const arIndex = {
        "avg_heart_rate"    : "115 bpm",
        "enhanced_avg_speed": "2p:50m",
        "total_calories"    : "288 calories",
        "total_distance"    : "0.0016 km",
        "total_timer_time"  : "00:34 phút"
    };

    const today = new Date();
    const dateString = today.toLocaleDateString('vi', {weekday: 'long',}) + ', ' + today.toLocaleDateString('en-GB');
    return <>

        <NavigationEvents onWillFocus={fetch}/>
        <ScrollView>
            <View>
                <View style={styles.mainContainer}>
                    <LastActivities activities={state} title="Last Activities"/>
                </View>
                {/*<AchivementIndex result={arIndex} dateString={dateString}
                                 username={useContext(AuthContext).state.username}/>*/}
                <AchivementBadge blurRadiuses={getBlurRadiuses()}/>
                {/*<View style={styles.container}>*/}
                <ArchivementTable title="Thành tích cá nhân"
                                  results={archivementContext.state.archivements}
                                  onImportPress={handleDocumentSelection}/>
                {/*</View>*/}
            </View>
        </ScrollView>
    < />
};


const styles = StyleSheet.create({
    textHeader     : {
        fontSize   : 18,
        color      : '#FFFFFF',
        fontWeight : 'bold',
        paddingLeft: 5,
    },
    textHeaderSmall: {
        fontSize   : 14,
        color      : '#FFFFFF',
        paddingLeft: 5,
    },
    container      : {
        // flex           : 8,
        // flexDirection  : 'column',
        // alignItems     : 'center',
    },
    mainContainer  : {
        alignItems: 'center',
    },

    menuContainer      : {
        height    : '10%',
        alignItems: 'flex-start',
        margin    : 10,
    },
    menuButtonContainer: {
        flexDirection: 'row',
        height       : '10%',
        alignItems   : 'flex-start',
        margin       : 10,
    },
    menuButton         : {
        fontSize       : 24,
        fontWeight     : 'bold',
        color          : 'white',
        backgroundColor: 'green',
        padding        : 15,
        // borderRadius   : 25,
        // overflow       : 'hidden',

    },
    icon               : {
        // color          : 'white',
        backgroundColor: 'green',
        padding        : 15,
        borderRadius   : 25,
        overflow       : 'hidden',

    },

    textBig             : {
        fontSize    : 18,
        fontWeight  : 'bold',
        color       : 'white',
        textAlign   : 'center',
        marginLeft  : 80,
        marginRight : 80,
        marginTop   : 20,
        marginBottom: 20,

    },
    textNormal          : {
        fontSize   : 14,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginLeft : 80,
        marginRight: 80,

    },
    textHuge            : {
        fontSize   : 40,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginLeft : 80,
        marginRight: 80,

    },
    textLink            : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,

    },
    textUpper           : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'green',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,

    },
    buttonGroupContainer: {
        backgroundColor: "blue",
        color          : "yellow",
        textAlign      : "center", // paddingVertical : 5,
        marginBottom   : 10,
        width          : 300,
    },
    video               : {
        width : 100,
        height: 100,
    },
    buttonContainer     : {
        flex           : 1,
        backgroundColor: "blue",
        flexDirection  : 'column',
        alignItems     : 'center',
    },
    button              : {
        width          : 250,
        height         : 60,
        marginBottom   : 20,
        backgroundColor: "mediumturquoise",

    },

})


export default MyActivitiesScreen;
