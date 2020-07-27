import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StationDetailSlider from '../../Component/Main/StationDetailSlider';
import { staitonDetailDummy } from '../../FakeData/mainData';

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
        backgroundColor: 'white',
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
