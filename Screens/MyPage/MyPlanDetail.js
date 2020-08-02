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

const MyPlanDetail = ({ route, navigation }) => {
    const {
        params: { id, list },
    } = route;

    const deletePlan = async () => {
        await axios.delete(`http://192.168.0.40:5050/plan/${id}`);
    };

    const renderItem = ({ item, index }) => {
        console.log(item[`day0${index + 1}`]);
        return (
            <View style={styles.dayCard}>
                <View>
                    <Text>{item[`day0${index + 1}`]['date']}</Text>
                    <Text>{`day0${index + 1}`}</Text>
                </View>
                <View>
                    {item[`day0${index + 1}`]['tasks'].map((task, taskIdx) => (
                        <View key={taskIdx}>
                            <Text>{task.region}</Text>
                            <View>
                                {task.toDos.map((toDo, toDoIdx) => (
                                    <Text key={toDoIdx}>{toDo}</Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
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
                <Text style={{ color: 'white' }}>계획 삭제하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
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
        marginBottom: 10,
        borderWidth: 2,
        padding: 5,
    },
    deleteBtn: {
        padding: 10,
        backgroundColor: 'blue',
    },
});

export default MyPlanDetail;
