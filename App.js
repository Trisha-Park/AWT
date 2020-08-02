import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Routes/MainTabNavigator';
import SignIn from './Screens/SignIn';

import { deletePlans, checkPlan } from './Actions/planActions';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import CourseDetail from './Screens/Main/CourseDetail';
import Search from './Screens/Main/Search';
import StationDetail from './Screens/Main/StationDetail';

const MainStack = createStackNavigator();

const App = ({ deletePlans, checkPlan }) => {
    const [isLogin, setIsLogin] = useState(false);

    // 플랜 리다이렉션 실험용
    // useEffect(() => {
    //     deletePlans();
    //     checkPlan(false);
    // }, []);

    const setLoggedIn = () => {
        setIsLogin(true);
    };

    return isLogin ? (
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
        <SignIn isLogin={isLogin} setLoggedIn={setLoggedIn} />
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkPlan: (isPlanExist) => dispatch(checkPlan(isPlanExist)),
        deletePlans: () => dispatch(deletePlans()),
    };
};

export default connect(null, mapDispatchToProps)(App);
