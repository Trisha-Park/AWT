import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Plan from '../Screens/Plan/Plan';
import PlanInfo from '../Screens/Plan/PlanInfo';
import PlanInfoDetail from '../Screens/Plan/PlanInfoDetail';
import { connect } from 'react-redux';

const PlanStack = createStackNavigator();

const PlanStackNavigator = ({ navigation, route }) => {
    if (route.state) {
        if (route.state.index === 0) {
            navigation.setOptions({ tabBarVisible: true });
        } else {
            navigation.setOptions({ tabBarVisible: false });
        }
    }
    return (
        <PlanStack.Navigator initialRouteName='계획'>
            <PlanStack.Screen
                name='계획'
                component={Plan}
                options={{ headerShown: false }}
            />
            <PlanStack.Screen name='계획 만들기' component={PlanInfo} />
            <PlanStack.Screen
                name='상세 계획 만들기'
                component={PlanInfoDetail}
            />
        </PlanStack.Navigator>
    );
};

const mapStateToProps = (state) => {
    return {
        isPlanExist: state.planReducer.isPlanExist,
    };
};

export default connect(mapStateToProps)(PlanStackNavigator);
