import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import Constants from 'expo-constants';
import dayjs from 'dayjs';

import CalendarModal from '../../Component/Plan/CalendarModal';
import { makeCurrentDate, transferMonth } from '../../helper/Helpers';

// 기본값을 3으로 셋팅했음
const days = [3, 5, 7];

const Plan = () => {
    const [selectedDay, setSelectedDay] = useState(days[0]);
    const [modalVisible, setModalVisible] = useState(false);
    const [startDate, setStartDate] = useState(makeCurrentDate());
    const [endDate, setEndDate] = useState(makeCurrentDate());

    const closeModal = () => {
        setModalVisible(false);
    };

    const setDates = (dayInfo) => {
        const { dateString } = dayInfo;
        const dateArr = dayjs(dateString)
            .add(selectedDay, 'day')
            .toString()
            .split(' ')
            .slice(1, 4);
        console.log();
        setStartDate(dateString);
        setEndDate(`${dateArr[2]}-${transferMonth(dateArr[1])}-${dateArr[0]}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.startContainer}>
                <Text style={styles.title}>내일로 시작하기</Text>
                <View style={styles.startButtonContainer}>
                    {days.map((day, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={styles.startButton}
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
                <Text>{endDate}</Text>
            </View>
            <Button block info>
                <Text>다음으로 넘어가기</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
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
});

export default Plan;
