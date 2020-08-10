import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyPage from '../Screens/MyPage/MyPage';
import MyArticle from '../Screens/MyPage/MyArticle';
import MyPlans from '../Screens/MyPage/MyPlans';
import MyPlanDetail from '../Screens/MyPage/MyPlanDetail';
import MyArticleDetail from '../Screens/MyPage/MyArticleDetail';
import MyScrap from '../Screens/MyPage/MyScrap';
import MyScrapDetail from '../Screens/MyPage/MyScrapDetail';
import MyPlanEdit from '../Screens/MyPage/MyPlanEdit';
import MyPlanEditDetail from '../Screens/MyPage/MyPlanEditDetail';

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
            initialRouteName='마이페이지'
            screenOptions={({ route }) => {
                if (route.name === '마이페이지') {
                    return {
                        headerShown: false,
                    };
                }
            }}
        >
            <MyPageStack.Screen name='마이페이지' component={MyPage} />
            <MyPageStack.Screen name='내가 쓴 게시글' component={MyArticle} />
            <MyPageStack.Screen name='내 계획' component={MyPlans} />
            <MyPageStack.Screen
                name='내 계획 알아보기'
                component={MyPlanDetail}
            />
            <MyPageStack.Screen
                name='내가 쓴 글 알아보기'
                component={MyArticleDetail}
            />
            <MyPageStack.Screen name='스크랩한 게시글' component={MyScrap} />
            <MyPageStack.Screen name='글 알아보기' component={MyScrapDetail} />
            <MyPageStack.Screen name='내 계획 수정' component={MyPlanEdit} />
            <MyPageStack.Screen
                name='내 계획 상세 수정'
                component={MyPlanEditDetail}
            />
        </MyPageStack.Navigator>
    );
};

export default MyPageStackNavigator;
