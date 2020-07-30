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
import Select from './Screens/Main/Select';
import StationDetail from './Screens/Main/StationDetail';

const MainStack = createStackNavigator();

const App = ({ deletePlans, checkPlan }) => {
    const [isLogin, setIsLogin] = useState(false);

    // 플랜 리다이렉션 실험용
    // useEffect(() => {
    //     deletePlans();
    //     checkPlan(false);
    // }, []);

    return isLogin ? (
        <NavigationContainer>
            <StatusBar backgroundColor='black' />
            <MainStack.Navigator screenOptions={{ headerShown: false }}>
                <MainStack.Screen name='Main' component={Main} />
                <MainStack.Screen
                    name='CourseDetail'
                    component={CourseDetail}
                />
                <MainStack.Screen name='Select' component={Select} />
                <MainStack.Screen
                    name='StationDetail'
                    component={StationDetail}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    ) : (
        <SignIn isLogin={isLogin} setIsLogin={setIsLogin} />
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkPlan: (isPlanExist) => dispatch(checkPlan(isPlanExist)),
        deletePlans: () => dispatch(deletePlans()),
    };
};

export default connect(null, mapDispatchToProps)(App);
