import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';

import StationDetailSlider from '../../Component/Main/StationDetailSlider';

const StationDetail = ({ route }) => {
    const {
        params: { id },
    } = route;
    const [isStationDataLoading, setIsStationDataLoading] = useState(true);
    const [stationData, setStationData] = useState({});
    const [food, setFood] = useState([]);
    const [tourism, setTourism] = useState([]);
    const [lodging, setLodging] = useState([]);
    const [weather, setWeather] = useState('');

    const getStationData = async () => {
        try {
            setIsStationDataLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.40:5050/station/${id}`
            );
            setStationData({ ...data.stationDeatil[0] });
            setFood([...data.food]);
            setTourism([...data.tourism]);
            setLodging([...data.lodging]);
            setWeather(data.weather);
            setIsStationDataLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getStationData();
    }, []);

    return isStationDataLoading ? (
        <View>
            <Text>로딩중..</Text>
        </View>
    ) : (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ paddingRight: 20 }}>
                    <Text style={styles.headerTitle}>
                        {stationData.station}
                    </Text>
                    <Text style={styles.headerInfo}>{stationData.info}</Text>
                </View>
                <Image source={{ uri: weather }} style={styles.weatherIcon} />
            </View>
            <StationDetailSlider detailInfo={food} title='맛집' />
            <StationDetailSlider detailInfo={tourism} title='관광지' />
            <StationDetailSlider detailInfo={lodging} title='숙소' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    headerContainer: {
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    headerInfo: {
        color: '#747d8c',
    },
    viewPager: {
        marginHorizontal: 20,
        flex: 0.8,
    },

    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
    },
    weatherIcon: {
        width: 50,
        height: 50,
    },
});

export default StationDetail;
