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
                    if (route.name === '메인') {
                        return (
                            <Fontisto
                                name='train-ticket'
                                size={24}
                                color={color}
                            />
                        );
                    } else if (route.name === '지도') {
                        return (
                            <Ionicons
                                name='ios-train'
                                size={30}
                                color={color}
                            />
                        );
                    } else if (route.name === '계획') {
                        return (
                            <MaterialIcons
                                name='event-note'
                                size={30}
                                color={color}
                            />
                        );
                    } else if (route.name === '커뮤니티') {
                        return (
                            <MaterialIcons
                                name='dashboard'
                                size={24}
                                color={color}
                            />
                        );
                    } else if (route.name === '마이페이지') {
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
            initialRouteName='메인'
        >
            <MainTab.Screen name='메인' component={Main} />
            <MainTab.Screen name='지도' component={Station} />
            <MainTab.Screen name='계획' component={Plan} />
            <MainTab.Screen name='커뮤니티' component={Community} />
            <MainTab.Screen name='마이페이지' component={MyPage} />
        </MainTab.Navigator>
    );
};

export default MainTabNavigator;
