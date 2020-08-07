import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    ToastAndroid,
    View,
} from 'react-native';
import { StackActions, useIsFocused } from '@react-navigation/native';

import { connect } from 'react-redux';
import { storePlans, checkPlan } from '../../Actions/planActions';
import axios from 'axios';

const PlanInfo = ({
    route,
    navigation,
    storePlans,
    checkPlan,
    resourceToken,
    userInfo,
}) => {
    const {
        params: { fullDates, dailyPlan, index },
    } = route;

    const [plans, setPlans] = useState([...Array(fullDates.length).fill('')]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            if (dailyPlan) {
                setPlans((prevState) => [
                    ...prevState.slice(0, index),
                    dailyPlan,
                    ...prevState.slice(index + 1),
                ]);
            }
        }
    }, [isFocused]);

    const postPlanData = async () => {
        try {
            const { data } = await axios.post(
                'http://192.168.0.40:5050/plan',
                {
                    userId: userInfo.userId,
                    list: plans,
                },
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
            );
            console.log(data);
            storePlans(data);
            checkPlan(true);
        } catch (error) {
            console.log(error);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('PlanInfoDetail', {
                    day: item.day,
                    date: item.date,
                });
            }}
        >
            <View style={styles.card}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.day}>{item.day}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <FlatList
                data={fullDates}
                renderItem={renderItem}
                keyExtractor={(item) => item.day}
                style={styles.container}
            />
            <TouchableOpacity
                style={{
                    ...styles.saveBtn,
                    backgroundColor:
                        plans.indexOf('') !== -1 ? '#f1f2f6' : '#0066FF',
                }}
                disabled={plans.indexOf('') !== -1 ? true : false}
                onPress={() => {
                    postPlanData();
                    if (Platform.OS === 'android') {
                        ToastAndroid.show(
                            '계획이 저장되었습니다.',
                            ToastAndroid.BOTTOM,
                            ToastAndroid.LONG
                        );
                    }
                    navigation.dispatch(
                        StackActions.push('Main', { screen: 'MyPage' })
                    );
                    navigation.dispatch(StackActions.replace('PlanEdit'));
                }}
            >
                <Text
                    style={{
                        ...styles.btnTitle,
                        color: plans.indexOf('') !== -1 ? '#000' : '#fff',
                    }}
                >
                    모든 계획 저장하기
                </Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingHorizontal: 30,
    },
    card: {
        backgroundColor: '#f1f2f6',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 5,
        paddingVertical: 13,
        paddingHorizontal: 18,
    },
    saveBtn: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    date: {
        color: '#747d8c',
        fontSize: 15,
        marginBottom: 2,
    },
    day: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});

const mapStateToProps = (state) => {
    return {
        plan: state.planReducer.plan,
        resourceToken: state.authReducer.resourceToken,
        userInfo: state.authReducer.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        storePlans: (plan) => dispatch(storePlans(plan)),
        checkPlan: (isPlanExist) => dispatch(checkPlan(isPlanExist)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanInfo);
