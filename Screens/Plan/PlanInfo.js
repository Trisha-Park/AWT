import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import { StackActions, useIsFocused } from '@react-navigation/native';

import { connect } from 'react-redux';
import {
    storePlans,
    checkPlan,
    editPlanLoadingStart,
} from '../../Actions/planActions';
import axios from 'axios';

const PlanInfo = ({
    route,
    navigation,
    storePlans,
    checkPlan,
    editPlanLoadingStart,
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
            const { data } = await axios.post('http://192.168.0.40:5050/plan', {
                userId: 1,
                list: plans,
            });

            storePlans(data);
            checkPlan(true);
            editPlanLoadingStart(true);
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
            <Card style={styles.card}>
                <Text style={styles.day}>{item.day}</Text>
                <Text>{item.date}</Text>
            </Card>
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
                style={styles.saveBtn}
                onPress={() => {
                    postPlanData();
                    navigation.navigate('Main');
                    navigation.dispatch(StackActions.popToTop());
                    navigation.dispatch(StackActions.replace('PlanEdit'));
                }}
            >
                <Text style={styles.btnTitle}>모든 계획 저장하기</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    card: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    saveBtn: {
        backgroundColor: 'blue',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        color: 'white',
    },
});

const mapStateToProps = (state) => {
    return {
        plan: state.planReducer.plan,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        storePlans: (plan) => dispatch(storePlans(plan)),
        checkPlan: (isPlanExist) => dispatch(checkPlan(isPlanExist)),
        editPlanLoadingStart: (isEditPlanLoading) =>
            dispatch(editPlanLoadingStart(isEditPlanLoading)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanInfo);
