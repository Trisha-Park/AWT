import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './Routes/MainStackNavigator';
import Station from './Screens/Station/Station';
import Plan from './Routes/PlanStackNavigator';
import Community from './Routes/CommunityStackNavigator';
import MyPage from './Routes/MyPageStackNavigator';

import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        if (route.name === 'Main') {
                            return (
                                <Fontisto
                                    name='train-ticket'
                                    size={24}
                                    color='grey'
                                />
                            );
                        } else if (route.name === 'Station') {
                            return (
                                <Ionicons
                                    name='ios-train'
                                    size={30}
                                    color='gray'
                                />
                            );
                        } else if (route.name === 'Plan') {
                            return (
                                <MaterialIcons
                                    name='event-note'
                                    size={30}
                                    color='grey'
                                />
                            );
                        } else if (route.name === 'Community') {
                            return (
                                <MaterialIcons
                                    name='dashboard'
                                    size={24}
                                    color='lightgrey'
                                />
                            );
                        } else if (route.name === 'MyPage') {
                            return (
                                <FontAwesome
                                    name='user'
                                    size={24}
                                    color='navy'
                                />
                            );
                        }
                    },
                })}
            >
                <Tab.Screen name='Main' component={Main} />
                <Tab.Screen name='Station' component={Station} />
                <Tab.Screen name='Plan' component={Plan} />
                <Tab.Screen name='Community' component={Community} />
                <Tab.Screen name='MyPage' component={MyPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
