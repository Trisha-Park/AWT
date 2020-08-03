import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyPage from '../Screens/MyPage/MyPage';
import MyArticle from '../Screens/MyPage/MyArticle';
import MyPlans from '../Screens/MyPage/MyPlans';
import MyPlanDetail from '../Screens/MyPage/MyPlanDetail';
import MyArticleDetail from '../Screens/MyPage/MyArticleDetail';

const MyPageStack = createStackNavigator();

const MyPageStackNavigator = ({ navigation, route }) => {
    if (route.state) {
        if (route.state.index === 0) {
            navigation.setOptions({ tabBarVisible: true });
        } else {
            navigation.setOptions({ tabBarVisible: false });
        }
    }
    return (
        <MyPageStack.Navigator
            initialRouteName='MyPage'
            screenOptions={({ route }) => {
                if (route.name === 'MyPage') {
                    return {
                        headerShown: false,
                    };
                }
            }}
        >
            <MyPageStack.Screen name='MyPage' component={MyPage} />
            <MyPageStack.Screen name='MyArticle' component={MyArticle} />
            <MyPageStack.Screen name='MyPlans' component={MyPlans} />
            <MyPageStack.Screen name='MyPlanDetail' component={MyPlanDetail} />
            <MyPageStack.Screen
                name='MyArticleDetail'
                component={MyArticleDetail}
            />
        </MyPageStack.Navigator>
    );
};

export default MyPageStackNavigator;
