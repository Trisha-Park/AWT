import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Plan from '../Screens/Plan/Plan';
import PlanInfo from '../Screens/Plan/PlanInfo';
import PlanInfoDetail from '../Screens/Plan/PlanInfoDetail';

const PlanStack = createStackNavigator();

const PlanStackNavigator = () => {
    return (
        <PlanStack.Navigator
            initialRouteName='Plan'
            screenOptions={({ route }) => {
                if (route.name === 'Plan') {
                    return {
                        headerShown: false,
                    };
                }
            }}
        >
            <PlanStack.Screen name='Plan' component={Plan} />
            <PlanStack.Screen name='PlanInfo' component={PlanInfo} />
            <PlanStack.Screen
                name='PlanInfoDetail'
                component={PlanInfoDetail}
            />
        </PlanStack.Navigator>
    );
};

export default PlanStackNavigator;
