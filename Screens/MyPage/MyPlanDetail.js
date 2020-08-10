import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Alert,
    ToastAndroid,
} from 'react-native';
import axios from 'axios';

import { FAB, Portal, Provider } from 'react-native-paper';

import { connect } from 'react-redux';
import {
    deletePlans,
    checkPlan,
    storePlans,
    storeEditingPlan,
} from '../../Actions/planActions';

const MyPlanDetail = ({
    route,
    navigation,
    resourceToken,
    plan,
    checkPlan,
    deletePlans,
    storePlans,
    storeEditingPlan,
}) => {
    const {
        params: { plans },
    } = route;

    const [active, setActive] = useState(false);

    const deletePlan = async () => {
        if (plan._id === plans._id) {
            deletePlans();
            checkPlan(false);
        }
        await axios.delete(`http://3.34.197.112:5050/plan/${plans._id}`, {
            headers: {
                authorization: resourceToken,
            },
            withCredentials: true,
        });
    };
    const toggleFav = () => {
        setActive((prevState) => !prevState);
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.dayCard}>
                <View style={styles.cardHeader}>
                    <Text style={styles.headerDay}>{`day0${index + 1}`}</Text>
                    <Text style={styles.headerDate}>
                        {item[`day0${index + 1}`]['date']}
                    </Text>
                </View>
                <View>
                    {item[`day0${index + 1}`]['tasks'].map((task, taskIdx) => (
                        <View style={styles.cardBody} key={taskIdx}>
                            <Text style={styles.regionTitle}>
                                {task.region}
                            </Text>
                            <View style={styles.toDoContainer}>
                                {task.toDos.map((toDo, toDoIdx) => (
                                    <Text key={toDoIdx} style={styles.toDo}>
                                        {toDo}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={plans.list}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => String(index)}
                />
                <Provider>
                    <Portal>
                        <FAB.Group
                            open={active}
                            icon='menu'
                            color='#fff'
                            style={{ backgroundColor: 'transparent' }}
                            fabStyle={{
                                backgroundColor: '#0066FF',
                                shadowOffset: 0,
                                elevation: 0,
                            }}
                            actions={[
                                {
                                    icon: 'plus',
                                    label: '메인에 계획 추가하기',
                                    style: { elevation: 0, shadowOffset: 0 },
                                    onPress: () => {
                                        storePlans(plans);
                                        checkPlan(true);
                                        if (Platform.OS === 'android') {
                                            ToastAndroid.show(
                                                '계획이 저장되었습니다.',
                                                ToastAndroid.BOTTOM,
                                                ToastAndroid.LONG
                                            );
                                        }
                                    },
                                },
                                {
                                    icon: 'calendar-edit',
                                    label: '계획 수정하기',
                                    style: { elevation: 0, shadowOffset: 0 },
                                    onPress: () => {
                                        storeEditingPlan(plans);
                                        navigation.navigate('내 계획 수정');
                                    },
                                },
                                {
                                    icon: 'delete',
                                    label: '계획 삭제하기',
                                    style: { elevation: 0, shadowOffset: 0 },
                                    onPress: () => {
                                        Alert.alert(
                                            '계획 삭제',
                                            '정말로 삭제하시겠습니까?',
                                            [
                                                {
                                                    text: '삭제',
                                                    onPress: () => {
                                                        deletePlan();
                                                        navigation.navigate(
                                                            '마이페이지'
                                                        );
                                                    },
                                                },
                                                {
                                                    text: '취소',
                                                },
                                            ]
                                        );
                                    },
                                },
                            ]}
                            onStateChange={toggleFav}
                        ></FAB.Group>
                    </Portal>
                </Provider>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f2f6',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    dayCard: {
        borderRadius: 5,
        paddingVertical: 13,
        paddingHorizontal: 18,
        marginBottom: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    headerDay: {
        color: '#0066FF',
        fontSize: 21,
        fontWeight: 'bold',
    },
    headerDate: {
        color: '#747d8c',
        fontSize: 14,
    },
    cardBody: {
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5,
    },
    regionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
        color: '#0066FF',
    },
    toDoContainer: {
        marginBottom: 7,
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
        plan: state.planReducer.plan,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkPlan: (isPlanExist) => dispatch(checkPlan(isPlanExist)),
        deletePlans: () => dispatch(deletePlans()),
        storePlans: (plan) => dispatch(storePlans(plan)),
        storeEditingPlan: (editingPlan) =>
            dispatch(storeEditingPlan(editingPlan)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPlanDetail);
