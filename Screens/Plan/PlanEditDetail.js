import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import { Entypo } from '@expo/vector-icons';
import { Card } from 'native-base';

import PlanRegionCard from '../../Component/Plan/PlanRegionCard';

const PlanEditDetail = ({ navigation, route }) => {
    const {
        params: { date, day, tasksInfo },
    } = route;

    const index = Number(day.split('')[4]) - 1;

    const [regions, setRegions] = useState([...tasksInfo]);

    const addRegionCard = () => {
        setRegions((prevState) => [...prevState, { region: '', toDos: [] }]);
    };

    const deleteRegionCard = (idx) => {
        setRegions((prevState) => {
            return prevState.length === 1
                ? ['']
                : [...prevState.slice(0, idx), ...prevState.slice(idx + 1)];
        });
    };

    const setRegionPlan = (idx, region, toDos) => {
        setRegions((prevState) => [
            ...prevState.slice(0, idx),
            { region, toDos: [...toDos] },
            ...prevState.slice(idx + 1),
        ]);
    };

    const showToast = () => {
        ToastAndroid.show(
            '지역 카드가 추가되었습니다.',
            ToastAndroid.BOTTOM,
            ToastAndroid.LONG
        );
    };

    return (
        <View style={styles.container}>
            <ViewPager style={styles.slider}>
                {regions.map((regionInfo, idx) => (
                    <PlanRegionCard
                        key={idx}
                        index={idx}
                        regionInfo={regionInfo}
                        deleteRegionCard={deleteRegionCard}
                        setRegionPlan={setRegionPlan}
                    />
                ))}
                <Card style={styles.card}>
                    <TouchableOpacity
                        onPress={() => {
                            addRegionCard();
                            showToast();
                        }}
                    >
                        <Entypo name='plus' size={100} color='black' />
                    </TouchableOpacity>
                </Card>
            </ViewPager>
            <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => {
                    navigation.navigate('PlanEdit', {
                        dailyPlan: {
                            [day]: {
                                date: date,
                                tasks: [...regions],
                            },
                        },
                        index,
                    });
                }}
            >
                <Text style={styles.btnTitle}>저장</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    slider: {
        flex: 0.95,
        marginVertical: 20,
        marginHorizontal: 10,
        alignSelf: 'stretch',
    },
    saveBtn: {
        position: 'relative',
        bottom: 0,
        backgroundColor: 'blue',
        width: 60,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        color: 'white',
    },
    card: {
        flex: 0.95,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PlanEditDetail;
