import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';

import StationDetailSlider from '../../Component/Main/StationDetailSlider';
import LoadingScreen from '../Loading';

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
                `http://3.34.197.112:5050/station/${id}`
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
        <LoadingScreen />
    ) : (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ paddingRight: 10 }}>
                    <Text style={styles.headerTitle}>
                        {stationData.station}
                    </Text>
                </View>
                <View style={styles.weatherContainer}>
                    <Image
                        source={{ uri: weather }}
                        style={styles.weatherIcon}
                    />
                </View>
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
        marginTop: 20,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    weatherContainer: {
        flexDirection: 'column',
        alignItems: 'center',
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
        width: 60,
        height: 60,
    },
});

export default StationDetail;
