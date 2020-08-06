import React from 'react';

import Main from '../Screens/Main/Main';
import Station from '../Screens/Station/Station';
import Plan from './PlanStackNavigator';
import Community from './CommunityStackNavigator';
import MyPage from './MyPageStackNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const MainTab = createBottomTabNavigator();

const MainTabNavigator = ({ navigation, route }) => {
    return (
        <MainTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Main') {
                        return (
                            <Fontisto
                                name='train-ticket'
                                size={24}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Station') {
                        return (
                            <Ionicons
                                name='ios-train'
                                size={30}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Plan') {
                        return (
                            <MaterialIcons
                                name='event-note'
                                size={30}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Community') {
                        return (
                            <MaterialIcons
                                name='dashboard'
                                size={24}
                                color={color}
                            />
                        );
                    } else if (route.name === 'MyPage') {
                        return (
                            <FontAwesome name='user' size={24} color={color} />
                        );
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: '#0066FF',
                inactiveTintColor: '#b2bec3',
                tabStyle: {
                    marginVertical: 4,
                },
            }}
            initialRouteName='Main'
        >
            <MainTab.Screen name='Main' component={Main} />
            <MainTab.Screen name='Station' component={Station} />
            <MainTab.Screen name='Plan' component={Plan} />
            <MainTab.Screen name='Community' component={Community} />
            <MainTab.Screen name='MyPage' component={MyPage} />
        </MainTab.Navigator>
    );
};

export default MainTabNavigator;
