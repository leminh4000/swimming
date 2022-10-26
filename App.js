import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import ProfileScreen from './src/screens/ProfileScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import CoachScreen from './src/screens/CoachScreen';
import ActivityDetailScreen from './src/screens/ActivityDetailScreen';
import MyActivitiesScreen from './src/screens/MyActivitiesScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as SwimProvider } from './src/context/SwimContext';
import { Provider as ArchivementProvider } from './src/context/ArchivementContext';
import { Provider as ActivityProvider } from './src/context/ActivityContext';
import { Provider as ActivitySummaryProvider } from './src/context/ActivitySummaryContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import Quest01SkillLevelScreen from './src/screens/Quest01SkillLevelScreen';
import Quest02SkillLevelScreen from './src/screens/Quest02SkillLevelScreen';
import Quest03SkillLevelScreen from './src/screens/Quest03SkillLevelScreen';
import WorkoutVideoListScreen from './src/screens/WorkoutVideoListScreen';
import ResolveQuestScreen from './src/screens/ResolveQuestScreen';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import PerformanceScreen from './src/screens/PerformanceScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import { LogBox } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import MyActivitiesScreen2 from './src/screens/MyActivitiesScreen2';
import MyActivitiesScreen3 from './src/screens/MyActivitiesScreen3';
import ActivitySummary from './src/components/ActivitySummary';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  ResolveQuest: ResolveQuestScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  questionFlow: createStackNavigator(
    {
      Quest01SkillLevel: createStackNavigator(
        {
          Quest01SkillLevel: {
            screen: Quest01SkillLevelScreen,
          },
          WorkoutVideo: WorkoutVideoListScreen,
        },
        {
          navigationOptions: {
            headerShown: false,
          },
        }
      ),
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
    }
  ),
  mainFlow: createBottomTabNavigator(
    {
      Home: {
        screen: createStackNavigator(
          {
            Home: HomeScreen,
          },
          {
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#83B9FF',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#FFF',
              },
              headerTintColor: '#FFF',
            },
          }
        ),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor }) => (
            <Feather
              name="home"
              size={24}
              focused={focused}
              color={tintColor}
            />
          ),
          headerShown: true,
        },
      },
      Activities: {
        screen: createStackNavigator(
          {
            MyActivities: createMaterialTopTabNavigator(
              {
                MyActivitiesScreen1: {
                  screen: MyActivitiesScreen,
                  navigationOptions: {
                    tabBarLabel: 'Hôm nay',
                  },
                },
                MyActivitiesScreen2: {
                  screen: MyActivitiesScreen2,
                  navigationOptions: {
                    tabBarLabel: 'Tuần này',
                  },
                },
                MyActivitiesScreen3: {
                  screen: MyActivitiesScreen3,
                  navigationOptions: {
                    tabBarLabel: 'Tháng này',
                  },
                },
              },
              {
                tabBarOptions: {
                  showIcon: true,

                  style: {
                    // backgroundColor: "white",
                    // marginTop      : 28,
                  },
                },
              }
            ),
            ActivityDetail: ActivityDetailScreen,
          },
          {
            defaultNavigationOptions: {
              headerTitle: 'Hoạt động',
              headerStyle: {
                backgroundColor: '#83B9FF',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#FFF',
              },
              headerTintColor: '#FFF',
            },
          }
        ),
        navigationOptions: {
          tabBarLabel: 'My Activities',
          tabBarIcon: ({ focused, tintColor }) => (
            <MaterialCommunityIcons
              name="swim"
              size={24}
              focused={focused}
              color={tintColor}
            />
          ),
        },
      },
      /*Coach     : {
            screen           : CoachScreen,
            navigationOptions: {
                tabBarLabel: 'Coach',
                tabBarIcon : ({
                                  color,
                                  size
                              }) => (<SimpleLineIcons name="book-open" size={24}
                                                      color="green"/>),
            }
        },*/
      Profile: {
        screen: createStackNavigator({
          screen: createMaterialTopTabNavigator(
            {
              Performance: {
                screen: PerformanceScreen,
                navigationOptions: {
                  tabBarLabel: 'Performance',
                },
              },
              Profile: {
                screen: ProfileScreen,
                navigationOptions: {
                  tabBarLabel: 'Profile',
                },
              },
              History: {
                screen: HistoryScreen,
                navigationOptions: {
                  tabBarLabel: 'History',
                },
              },
            },
            {
              tabBarOptions: {
                showIcon: true,

                style: {
                  // backgroundColor: "#006600",
                  // marginTop      : 28,
                },
              },
            }
          ),
        }),

        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, tintColor }) => (
            <Feather
              name="align-center"
              size={24}
              focused={focused}
              color={tintColor}
            />
          ),
        },
      },
    },
    {
      defaultNavigationOptions: {
        tabBarOptions: {
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: { backgroundColor: '#145BB6' },
        },
      },
    }
  ),
  WorkoutVideo: WorkoutVideoListScreen,
});

const App = createAppContainer(switchNavigator);
export default () => {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  return (
    <ActivitySummaryProvider>
      <ActivityProvider>
        <ArchivementProvider>
          <SwimProvider>
            <AuthProvider>
              <App
                ref={(navigator) => {
                  setNavigator(navigator);
                }}
              />
            </AuthProvider>
          </SwimProvider>
        </ArchivementProvider>
      </ActivityProvider>
    </ActivitySummaryProvider>
  );
};
