import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    ToastAndroid,
    View,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

import { fullPlan, dateDummy } from '../../FakeData/planData';

import { connect } from 'react-redux';
import { storePlans } from '../../Actions/planActions';

const PlanEdit = ({
    route,
    navigation,
    plan,
    storePlans,
    resourceToken,
    userInfo,
}) => {
    const [plans, setPlans] = useState([...fullPlan]);
    const [fullDates, setFullDates] = useState([...dateDummy]);
    const [isLoading, setIsLoading] = useState(true);

    // 이미 계획 있는 상태
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
            setIsLoading(false);
        }
    }, []);

    const showToast = () => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(
                '계획이 업데이트되었습니다.',
                ToastAndroid.CENTER,
                ToastAndroid.LONG
            );
        }
    };

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            // 플랜 만들고 planedit에 처음 진입할때
            if (plan.list) {
                setIsLoading(true);
                setPlans([...plan.list]);
                setFullDates([
                    ...plan.list.map((toDo, idx) => {
                        return {
                            date: toDo[`day0${idx + 1}`]['date'],
                            day: `day0${idx + 1}`,
                        };
                    }),
                ]);
                setIsLoading(false);
            }

            // 하나하나 태스크카드 추가할때
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
            await axios.put(
                `http://192.168.0.40:5050/plan/${plan._id}`,
                {
                    list: plans,
                },
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
            );
            storePlans({
                _id: plan._id,
                userId: userInfo.userId,
                list: plans,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                const index = Number(item.day.split('')[4]);
                navigation.navigate('상세 계획 수정하기', {
                    day: item.day,
                    date: item.date,
                    tasksInfo: plans[index - 1][`day0${index}`]['tasks'],
                });
            }}
        >
            <View style={styles.card}>
                <Text>{item.date}</Text>
                <Text style={styles.day}>{item.day}</Text>
            </View>
        </TouchableOpacity>
    );

    return isLoading ? (
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
        paddingTop: 60,
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
        marginBottom: 20,
    },
    saveBtn: {
        backgroundColor: '#0066FF',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanEdit);
