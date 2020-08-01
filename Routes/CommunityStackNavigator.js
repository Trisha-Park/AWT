import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Community from '../Screens/Community/Community';
import ArticleDetail from '../Screens/Community/ArticleDetail';
import CreateArticle from '../Screens/Community/CreateArticle';
import EditArticleDetail from '../Screens/Community/EditArticleDetail';

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
            initialRouteName='Community'
            screenOptions={({ route }) => {
                if (route.name === 'Community') {
                    return {
                        headerShown: false,
                    };
                }
            }}
        >
            <CommunityStack.Screen name='Community' component={Community} />
            <CommunityStack.Screen
                name='ArticleDetail'
                component={ArticleDetail}
            />
            <CommunityStack.Screen
                name='CreateArticle'
                component={CreateArticle}
            />
            <CommunityStack.Screen
                name='EditArticleDetail'
                component={EditArticleDetail}
            />
        </CommunityStack.Navigator>
    );
};

export default CommunityStackNavigator;
