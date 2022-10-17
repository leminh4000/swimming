import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
    createBottomTabNavigator, createMaterialTopTabNavigator
} from 'react-navigation-tabs';
import ProfileScreen from './src/screens/ProfileScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import CoachScreen from './src/screens/CoachScreen';
import ActivityDetailScreen from './src/screens/ActivityDetailScreen';
import MyActivitiesScreen from './src/screens/MyActivitiesScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as SwimProvider} from './src/context/SwimContext';
import {
    Provider as ArchivementProvider
} from './src/context/ArchivementContext';
import {Provider as ActivityProvider} from './src/context/ActivityContext';
import {setNavigator} from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import Quest01SkillLevelScreen from "./src/screens/Quest01SkillLevelScreen";
import Quest02SkillLevelScreen from "./src/screens/Quest02SkillLevelScreen";
import Quest03SkillLevelScreen from "./src/screens/Quest03SkillLevelScreen";
import WorkoutVideoListScreen from "./src/screens/WorkoutVideoListScreen";
import ResolveQuestScreen from "./src/screens/ResolveQuestScreen";
import {SimpleLineIcons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import PerformanceScreen from "./src/screens/PerformanceScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import {LogBox} from "react-native";


const switchNavigator = createSwitchNavigator({
    ResolveAuth : ResolveAuthScreen,
    ResolveQuest: ResolveQuestScreen,
    loginFlow   : createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen,
    }),
    questionFlow: createStackNavigator({
            Quest01SkillLevel: createStackNavigator({
                    Quest01SkillLevel: {
                        screen: Quest01SkillLevelScreen,
                    },
                    WorkoutVideo     : WorkoutVideoListScreen,
                },
                {
                    navigationOptions: {
                        headerShown: false,
                    },
                }),
            Quest02SkillLevel: {
                screen: Quest02SkillLevelScreen,
                navigationOptions: {
                    headerShown: false,
                },
            },
            Quest03SkillLevel: {
                screen: Quest03SkillLevelScreen,
                navigationOptions: {
                    headerShown: false,
                },
            },
        },
        {
            navigationOptions: {
                headerShown: false,
            },
        }),
    mainFlow    : createBottomTabNavigator({
        Activities: {
            screen           : createStackNavigator({
                MyActivities  : MyActivitiesScreen,
                ActivityDetail: ActivityDetailScreen,
            }),
            navigationOptions: {
                tabBarLabel: 'My Activities',
                tabBarIcon : ({
                                  color,
                                  size
                              }) => (
                    <Feather name="activity" size={24} color="green"/>),
            }
        },
        Coach     : {
            screen           : CoachScreen,
            navigationOptions: {
                tabBarLabel: 'Coach',
                tabBarIcon : ({
                                  color,
                                  size
                              }) => (<SimpleLineIcons name="book-open" size={24}
                                                      color="green"/>),
            }
        },
        Profile   : {
            screen           : createMaterialTopTabNavigator({
                Performance: {
                    screen           : PerformanceScreen,
                    navigationOptions: {
                        tabBarLabel: "Performance",
                    },
                },
                Profile    : {
                    screen           : ProfileScreen,
                    navigationOptions: {
                        tabBarLabel: "Profile",
                    },
                },
                History    : {
                    screen           : HistoryScreen,
                    navigationOptions: {
                        tabBarLabel: "History",
                    },
                },
            }, {
                tabBarOptions: {
                    showIcon: true,

                    style: {
                        backgroundColor: "#006600",
                        marginTop      : 28,
                    },
                },
            }),
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon : ({
                                  color,
                                  size
                              }) => (<AntDesign name="profile" size={24}
                                                color="green"/>),
            },
        },
    }),
    WorkoutVideo: WorkoutVideoListScreen,
});

const App = createAppContainer(switchNavigator);
export default () => {
    LogBox.ignoreLogs(["EventEmitter.removeListener"]);
    return (
        <ActivityProvider>
            <ArchivementProvider>
                <SwimProvider>
                    <AuthProvider>
                        <App ref={(navigator) => {
                            setNavigator(navigator)
                        }}/>
                    </AuthProvider>
                </SwimProvider>
            </ArchivementProvider>
        </ActivityProvider>)
}
