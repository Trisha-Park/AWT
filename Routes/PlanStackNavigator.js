import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Plan from '../Screens/Plan/Plan';
import PlanInfo from '../Screens/Plan/PlanInfo';
import PlanInfoDetail from '../Screens/Plan/PlanInfoDetail';
import PlanEdit from '../Screens/Plan/PlanEdit';
import PlanEditDetail from '../Screens/Plan/PlanEditDetail';
import { connect } from 'react-redux';

const PlanStack = createStackNavigator();

const PlanStackNavigator = ({ navigation, route, isPlanExist }) => {
    if (route.state) {
        if (route.state.index === 0) {
            navigation.setOptions({ tabBarVisible: true });
        } else {
            navigation.setOptions({ tabBarVisible: false });
        }
    }

    return (
        <PlanStack.Navigator
            initialRouteName={isPlanExist ? 'PlanEdit' : 'Plan'}
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
            <PlanStack.Screen name='PlanEdit' component={PlanEdit} />
            <PlanStack.Screen
                name='PlanEditDetail'
                component={PlanEditDetail}
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
