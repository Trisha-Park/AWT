import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPage from '../Screens/MyPage/MyPage';
import MyArticle from '../Screens/MyPage/MyArticle';

const MyPageStack = createStackNavigator();

const MyPageStackNavigator = () => {
    return (
        <MyPageStack.Navigator
            initialRouteName='Community'
            screenOptions={({ route }) => {
                if (route.name === 'Community') {
                    return {
                        headerShown: false,
                    };
                }
            }}
        >
            <MyPageStack.Screen name='MyPage' component={MyPage} />
            <MyPageStack.Screen name='MyArticle' component={MyArticle} />
        </MyPageStack.Navigator>
    );
};

export default MyPageStackNavigator;
