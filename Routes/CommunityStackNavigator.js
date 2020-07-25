import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Community from '../Screens/Community/Community';
import ArticleDetail from '../Screens/Community/ArticleDetail';
import CreateArticle from '../Screens/Community/CreateArticle';

const CommunityStack = createStackNavigator();

const CommunityStackNavigator = () => {
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
        </CommunityStack.Navigator>
    );
};

export default CommunityStackNavigator;
