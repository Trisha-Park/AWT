import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import StationDetailSlider from '../../Component/Main/StationDetailSlider';
import { staitonDetailDummy } from '../../FakeData/mainData';

// 뒤로가기 있는 헤더는 스택 네비게이터를 적용시키면 자동으로 생길 예정입니다
const StationDetail = ({ route }) => {
    const [stationDetail, setStationDetail] = useState({
        ...staitonDetailDummy,
    });
    const {
        params: { region },
    } = route;
    const { sookBak, gwanGwang, foods } = stationDetail;

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{region}</Text>
                <Text>{region}조아 우분투조아</Text>
            </View>
            <StationDetailSlider detailInfo={sookBak} />
            <StationDetailSlider detailInfo={gwanGwang} />
            <StationDetailSlider detailInfo={foods} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    headerContainer: {
        marginLeft: 20,
        marginVertical: 30,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    viewPager: {
        marginHorizontal: 20,
        flex: 0.8,
    },

    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
    },
});

export default StationDetail;
