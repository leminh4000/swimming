import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import Quest01SkillLevelScreeen from "./src/screens/Quest01SkillLevelScreeen";
import Quest02SkillLevelScreeen from "./src/screens/Quest02SkillLevelScreeen";
import Quest03SkillLevelScreeen from "./src/screens/Quest03SkillLevelScreeen";
import Quest04SkillLevelScreeen from "./src/screens/Quest04SkillLevelScreeen";

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen, Signin: SigninScreen,
    }),
    questionFlow: createStackNavigator({
        Quest01SkillLevel: Quest01SkillLevelScreeen,
        Quest02SkillLevel: Quest02SkillLevelScreeen,
        Quest03SkillLevel: Quest03SkillLevelScreeen,
        Quest04SkillLevel: Quest04SkillLevelScreeen,
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen, TrackDetail: TrackDetailScreen,
        }), TrackCreate: TrackCreateScreen, Account: AccountScreen,
    }),
});

const App = createAppContainer(switchNavigator);
export default () => {
    return (<AuthProvider>
        <App ref={(navigator) => {
            setNavigator(navigator)
        }}/>
    </AuthProvider>)
}
