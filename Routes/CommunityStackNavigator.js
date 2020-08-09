import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Community from '../Screens/Community/Community';
import ArticleDetail from '../Screens/Community/ArticleDetail';
import CreateArticle from '../Screens/Community/CreateArticle';
import EditArticleDetail from '../Screens/Community/EditArticleDetail';
import EditComment from '../Screens/Community/EditComment';
import CommunitySearch from '../Screens/Community/CommunitySearch';

const CommunityStack = createStackNavigator();

const CommunityStackNavigator = ({ navigation, route }) => {
    if (route.state) {
        if (route.state.index === 0) {
            navigation.setOptions({ tabBarVisible: true });
        } else {
            navigation.setOptions({ tabBarVisible: false });
        }
    }
    return (
        <CommunityStack.Navigator
            initialRouteName='커뮤니티'
            screenOptions={({ route }) => {
                if (route.name === '커뮤니티') {
                    return {
                        headerShown: false,
                    };
                }
            }}
        >
            <CommunityStack.Screen name='커뮤니티' component={Community} />
            <CommunityStack.Screen
                name='글 알아보기'
                component={ArticleDetail}
            />
            <CommunityStack.Screen
                name='글쓰기'
                component={CreateArticle}
            />
            <CommunityStack.Screen
                name='고쳐쓰기'
                component={EditArticleDetail}
            />
            <CommunityStack.Screen name='댓글 고쳐쓰기' component={EditComment} />
            <CommunityStack.Screen name='검색 결과' component={CommunitySearch} />
        </CommunityStack.Navigator>
    );
};

export default CommunityStackNavigator;
