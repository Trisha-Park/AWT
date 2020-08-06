import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Alert,
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { deletePlans, checkPlan } from '../../Actions/planActions';

const MyPlanDetail = ({
    route,
    navigation,
    resourceToken,
    plan,
    checkPlan,
    deletePlans,
}) => {
    const {
        params: { id, list },
    } = route;

    const deletePlan = async () => {
        console.log(id);
        if (plan._id === id) {
            // plan 삭제!
            deletePlans();
            checkPlan(false);
        }
        await axios.delete(`http://192.168.0.40:5050/plan/${id}`, {
            headers: {
                authorization: resourceToken,
            },
            withCredentials: true,
        });
    };

    const renderItem = ({ item, index }) => {
        console.log(item[`day0${index + 1}`]);
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
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => String(index)}
                />
            </SafeAreaView>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert('계획 삭제', '정말로 삭제하시겠습니까?', [
                        {
                            text: '삭제',
                            onPress: () => {
                                // TODO: 삭제 API 실행, 마이페이지로 리다이렉트
                                console.log('삭제');
                                deletePlan();
                                navigation.navigate('MyPage');
                            },
                        },
                        {
                            text: '취소',
                            onPress: () => {
                                console.log('취소');
                            },
                        },
                    ]);
                }}
                style={styles.deleteBtn}
            >
                <Text style={styles.buttonTitle}>계획 삭제하기</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    dayCard: {
        backgroundColor: '#f1f2f6',
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerDate: {
        color: '#747d8c',
        fontSize: 14,
    },
    cardBody: {
        backgroundColor: '#dfe4ea',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5,
    },
    regionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    toDoContainer: {
        marginBottom: 7,
    },
    deleteBtn: {
        alignSelf: 'stretch',
        backgroundColor: '#0066FF',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: '#fff',
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPlanDetail);
