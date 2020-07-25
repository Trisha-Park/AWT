import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Plan from '../Screens/Plan/Plan';
import PlanInfo from '../Screens/Plan/PlanInfo';
import PlanInfoDetail from '../Screens/Plan/PlanInfoDetail';

const PlanStack = createStackNavigator();

const PlanStackNavigator = () => {
    const isPlan = false; // 현재 계획이 있는 지를 나타내는 임시 변수 (추후 asyncStorage / axios로 가져와지는 데이터가 있는지로 판단 예정입니다)

    return (
        <PlanStack.Navigator
            initialRouteName={isPlan ? 'PlanInfo' : 'Plan'}
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
