import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Screens/Main/Main';
import Station from './Screens/Station/Station';
import Plan from './Screens/Plan/Plan';
import Community from './Screens/Community/Community';
import MyPage from './Screens/MyPage/MyPage';
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
                        let iconName;
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
