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

const PlanInfoDetail = ({ navigation, route }) => {
    // plan이 있다면 인자로 plan을 받을것임.. 그래서 그걸 regions의 초기값으로 해줄거야
    const {
        params: { date, day },
    } = route;

    const index = Number(day.split('')[4]) - 1;

    const [regions, setRegions] = useState([{ region: '', toDos: [] }]);

    const addRegionCard = () => {
        setRegions((prevState) => [...prevState, { region: '', toDos: [] }]);
    };

    const deleteRegionCard = (idx) => {
        setRegions((prevState) => [
            ...prevState.slice(0, idx),
            ...prevState.slice(idx + 1),
        ]);
        navigation.navigate('PlanInfoDetail');
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
                    const object = regions.reduce((obj, area) => {
                        obj[area.region] = [...area.toDos];
                        return obj;
                    }, {});

                    object.date = date;

                    navigation.navigate('PlanInfo', {
                        dailyPlan: {
                            [day]: {
                                ...object,
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

export default PlanInfoDetail;
