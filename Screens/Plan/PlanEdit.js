import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import { Card, View } from 'native-base';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

import { fullPlan } from '../../FakeData/planData';

import { connect } from 'react-redux';

const PlanEdit = ({ route, navigation, plan }) => {
    const [plans, setPlans] = useState(
        !plan._id ? [...fullPlan] : [...plan.list]
    );
    const [fullDates, setFullDates] = useState(
        !plan._id
            ? [
                  ...fullPlan.map((toDo, idx) => {
                      return {
                          date: toDo[`day0${idx + 1}`]['date'],
                          day: `day0${idx + 1}`,
                      };
                  }),
              ]
            : [
                  ...plan.list.map((toDo, idx) => {
                      return {
                          date: toDo[`day0${idx + 1}`]['date'],
                          day: `day0${idx + 1}`,
                      };
                  }),
              ]
    );

    useEffect(() => {
        if (plan._id) {
            setPlans([...plan.list]);
            setFullDates([
                ...plan.list.map((toDo, idx) => {
                    return {
                        date: toDo[`day0${idx + 1}`]['date'],
                        day: `day0${idx + 1}`,
                    };
                }),
            ]);
        }
    }, []);

    const showToast = () => {
        ToastAndroid.show(
            '계획이 업데이트되었습니다.',
            ToastAndroid.CENTER,
            ToastAndroid.LONG
        );
    };

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            if (route.params) {
                const {
                    params: { dailyPlan, index },
                } = route;
                setPlans((prevState) => [
                    ...prevState.slice(0, index),
                    dailyPlan,
                    ...prevState.slice(index + 1),
                ]);
            }
        }
    }, [isFocused]);

    const editPlanData = async () => {
        try {
            const { data } = await axios.put(
                `http://192.168.0.40:5050/plan/${plan._id}`,
                {
                    userId: 1,
                    list: plans,
                }
            );
            storePlans(data);
        } catch (error) {
            console.log(error);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                const index = Number(item.day.split('')[4]);
                console.log(plans[index - 1][`day0${index}`]['tasks']);
                navigation.navigate('PlanEditDetail', {
                    day: item.day,
                    date: item.date,
                    tasksInfo: plans[index - 1][`day0${index}`]['tasks'],
                });
            }}
        >
            <Card style={styles.card}>
                <Text style={styles.day}>{item.day}</Text>
                <Text>{item.date}</Text>
            </Card>
        </TouchableOpacity>
    );

    return !plan._id ? (
        <View />
    ) : (
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
                    editPlanData();
                    showToast();
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

export default connect(mapStateToProps, null)(PlanEdit);
