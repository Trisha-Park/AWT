import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Routes/MainTabNavigator';
import SignIn from './Screens/SignIn';

import { createStackNavigator } from '@react-navigation/stack';
import CourseDetail from './Screens/Main/CourseDetail';
import Search from './Screens/Main/Search';
import StationDetail from './Screens/Main/StationDetail';

import { connect } from 'react-redux';

const MainStack = createStackNavigator();

const App = ({ resourceToken }) => {
    return resourceToken ? (
        <NavigationContainer>
            <StatusBar backgroundColor='black' />
            <MainStack.Navigator>
                <MainStack.Screen
                    name='Main'
                    component={Main}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name='CourseDetail'
                    component={CourseDetail}
                    options={{ headerShown: true }}
                />
                <MainStack.Screen
                    name='Search'
                    component={Search}
                    options={{ headerShown: true }}
                />
                <MainStack.Screen
                    name='StationDetail'
                    component={StationDetail}
                    options={{ headerShown: true }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    ) : (
        <SignIn />
    );
};

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(App);
