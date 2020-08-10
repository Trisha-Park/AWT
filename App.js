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
import FavStations from './Screens/Main/FabStations';

import { connect } from 'react-redux';

const MainStack = createStackNavigator();

const App = ({ resourceToken }) => {
    return resourceToken ? (
        <NavigationContainer>
            <StatusBar backgroundColor='black' />
            <MainStack.Navigator>
                <MainStack.Screen
                    name='메인'
                    component={Main}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name='코스 정보'
                    component={CourseDetail}
                    options={{ headerShown: true }}
                />
                <MainStack.Screen
                    name='검색'
                    component={Search}
                    options={{ headerShown: true }}
                />
                <MainStack.Screen
                    name='역 정보'
                    component={StationDetail}
                    options={{ headerShown: true }}
                />
                <MainStack.Screen
                    name='즐겨찾기한 역'
                    component={FavStations}
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
