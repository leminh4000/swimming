import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ProfileScreen from './src/screens/ProfileScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import CoachScreen from './src/screens/CoachScreen';
import ActivityDetailScreen from './src/screens/ActivityDetailScreen';
import MyActivitiesScreen from './src/screens/MyActivitiesScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as SwimProvider} from './src/context/SwimContext';
import {setNavigator} from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import Quest01SkillLevelScreen from "./src/screens/Quest01SkillLevelScreen";
import Quest02SkillLevelScreen from "./src/screens/Quest02SkillLevelScreen";
import Quest03SkillLevelScreen from "./src/screens/Quest03SkillLevelScreen";
import Quest04SkillLevelScreen from "./src/screens/Quest04SkillLevelScreen";
import WorkoutVideoListScreen from "./src/screens/WorkoutVideoListScreen";
import Quest05SkillLevelScreen from "./src/screens/Quest05SkillLevelScreeen";
import Quest06SkillLevelScreen from "./src/screens/Quest06SkillLevelScreen";

const switchNavigator = createSwitchNavigator({
    ResolveAuth : ResolveAuthScreen,
    loginFlow   : createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen,
    }),
    questionFlow: createStackNavigator({
        Quest05SkillLevel: Quest05SkillLevelScreen,
        Quest06SkillLevel: Quest06SkillLevelScreen,
        Quest01SkillLevel: Quest01SkillLevelScreen,
        Quest02SkillLevel: Quest02SkillLevelScreen,
        Quest03SkillLevel: Quest03SkillLevelScreen,
        Quest04SkillLevel: Quest04SkillLevelScreen,
    }),
    mainFlow    : createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            MyActivities  : MyActivitiesScreen,
            ActivityDetail: ActivityDetailScreen,
        }),
        Coach        : CoachScreen,
        Profile      : ProfileScreen,
    }),
    WorkoutVideo: WorkoutVideoListScreen,
});

const App = createAppContainer(switchNavigator);
export default () => {
    return (
        <SwimProvider>
            <AuthProvider>
                <App ref={(navigator) => {
                    setNavigator(navigator)
                }}/>
            </AuthProvider>
        </SwimProvider>)
}
