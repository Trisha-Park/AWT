import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../Screens/Main/Main';
import CourseDetail from '../Screens/Main/CourseDetail';
import Select from '../Screens/Main/Select';
import StationDetail from '../Screens/Main/StationDetail';

const MainStack = createStackNavigator();

const MainStackNavigator = ({ navigation, route }) => {
    return (
        <MainStack.Navigator
            initialRouteName='Main'
            screenOptions={({ route }) => {
                if (route.name === 'Main') {
                    return {
                        headerShown: false,
                    };
                }
            }}
        >
            <MainStack.Screen name='Main' component={Main} />
            <MainStack.Screen name='CourseDetail' component={CourseDetail} />
            <MainStack.Screen name='Select' component={Select} />
            <MainStack.Screen name='StationDetail' component={StationDetail} />
        </MainStack.Navigator>
    );
};

export default MainStackNavigator;
