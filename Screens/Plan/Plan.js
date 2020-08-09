import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import UCT from 'dayjs/plugin/utc';
dayjs.extend(CustomParseFormat);
dayjs.extend(UCT);

import CalendarModal from '../../Component/Plan/CalendarModal';
import { makeCurrentDate } from '../../helper/Helpers';

const days = [3, 5, 7];

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
            <View style={{ marginHorizontal: 15 }}>
                <View style={styles.startContainer}>
                    <Text style={styles.title}>기차여행 시작하기</Text>
                    <View style={styles.startButtonContainer}>
                        {days.map((day, idx) => (
                            <TouchableOpacity
                                key={idx}
                                style={{
                                    ...styles.startButton,
                                    backgroundColor:
                                        day === selectedDay
                                            ? '#0066FF'
                                            : '#f1f2f6',
                                }}
                                onPress={() => {
                                    setSelectedDay(day);
                                }}
                            >
                                <Text
                                    style={{
                                        ...styles.buttonText,
                                        color:
                                            day === selectedDay
                                                ? '#fff'
                                                : '#000',
                                    }}
                                >
                                    {day}일
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.dayContainer}>
                    <Text style={styles.title}>출발 날짜</Text>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <TouchableOpacity
                            style={styles.dateContainer}
                            onPress={() => {
                                setModalVisible(true);
                            }}
                        >
                            <Text style={styles.date}>{startDate}</Text>
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
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{endDate}</Text>
                    </View>
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
                    backgroundColor:
                        startDate === endDate ? '#f1f2f6' : '#0066FF',
                }}
            >
                <Text
                    style={{
                        color: startDate === endDate ? '#000' : '#fff',
                        fontWeight: 'bold',
                        fontSize: 16,
                    }}
                >
                    다음으로 넘어가기
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    startContainer: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 22,
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
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    dayContainer: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 10,
    },
    dateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f2f6',
        height: 50,
        alignSelf: 'stretch',
        marginHorizontal: 20,
        borderRadius: 10,
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    passButton: {
        position: 'absolute',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        bottom: 0,
    },
});

export default Plan;
