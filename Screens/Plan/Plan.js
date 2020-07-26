import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import UCT from 'dayjs/plugin/utc';
dayjs.extend(CustomParseFormat);
dayjs.extend(UCT);

import CalendarModal from '../../Component/Plan/CalendarModal';
import { makeCurrentDate } from '../../helper/Helpers';

// 기본값을 3으로 셋팅했음
const days = [3, 5, 7];

// 내가필요한거: 1 ~n일차까지의 날짜와 n일차 매칭된 데이타, 전체 플랜 데이터를 합친거 -> 요놈은 플랜인포디테일거를 플랜인포로 끌어올려서 보내야합니다
// state를 배열로 만들어서 거기에 또 nested Array / Obj 형태로 넣어야 합니다
const Plan = ({ navigation }) => {
    const [selectedDay, setSelectedDay] = useState(days[0]);
    const [modalVisible, setModalVisible] = useState(false);
    const [startDate, setStartDate] = useState(makeCurrentDate());
    const [endDate, setEndDate] = useState(makeCurrentDate());
    const [fullDates, setFullDates] = useState([]);

    const closeModal = () => {
        setModalVisible(false);
    };

    const setDates = (dayInfo) => {
        const { dateString } = dayInfo;
        setFullDates([
            ...Array(selectedDay)
                .fill('')
                .map((day, idx) => {
                    return {
                        day: `day0${idx + 1}`,
                        date: dayjs(dateString)
                            .add(idx + 1, 'day')
                            .utc()
                            .format('YYYY-MM-DD'),
                    };
                }),
        ]);
        setStartDate(dateString);
        setEndDate(
            dayjs(dateString).add(selectedDay, 'day').utc().format('YYYY-MM-DD')
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.startContainer}>
                <Text style={styles.title}>내일로 시작하기</Text>
                <View style={styles.startButtonContainer}>
                    {days.map((day, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={{
                                ...styles.startButton,
                                backgroundColor:
                                    day === selectedDay ? 'red' : 'white',
                            }}
                            onPress={() => {
                                setSelectedDay(day);
                            }}
                        >
                            <Text style={styles.buttonText}>{day}일</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.dayContainer}>
                <Text style={styles.title}>출발 날짜</Text>
                <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'yellow',
                            width: 100,
                            height: 50,
                        }}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    >
                        <Text>{startDate}</Text>
                    </TouchableOpacity>
                    <CalendarModal
                        modalVisible={modalVisible}
                        closeModal={closeModal}
                        startDate={startDate}
                        setDates={setDates}
                    />
                </View>
            </View>
            <View style={styles.dayContainer}>
                <Text style={styles.title}>도착 날짜</Text>
                <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text>{endDate}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('PlanInfo', {
                        fullDates,
                    });
                }}
                disabled={startDate === endDate ? true : false}
                style={{
                    ...styles.passButton,
                    backgroundColor: startDate === endDate ? 'grey' : 'yellow',
                }}
            >
                <Text>다음으로 넘어가기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startContainer: {
        flex: 5,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 25,
        paddingHorizontal: 15,
    },
    startButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    startButton: {
        width: 80,
        height: 80,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    dayContainer: {
        flex: 4,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    dates: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    date: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    passButton: {
        backgroundColor: 'yellow',
        width: 100,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
});

export default Plan;
