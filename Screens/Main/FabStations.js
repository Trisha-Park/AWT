import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

import { connect } from 'react-redux';

import Loading from '../Loading';

const FavStations = ({ navigation, resourceToken }) => {
    const [favStations, setFavStations] = useState([]);
    const [toggleFavListStar, setToggleFavListStar] = useState([]);
    const [isFavStationsLoading, setIsFavStationsLoading] = useState(true);

    const toggleFavStations = async (stationId, resourceToken, idx) => {
        try {
            await axios.put(
                `http://3.34.197.112:5050/user/favStation/${stationId}`,
                {},
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
            );

            getFavStations();
        } catch (error) {
            console.log(error);
        }
    };

    const getFavStations = async () => {
        try {
            setIsFavStationsLoading(true);
            const { data } = await axios.get(
                'http://3.34.197.112:5050/user/favStationList',
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
            );

            if (data.favStation.length !== 0) {
                setFavStations([...data.favStation]);
                setToggleFavListStar([
                    ...Array(data.favStation.length).fill(true),
                ]);
            }
            setIsFavStationsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFavStations();
    }, []);

    return isFavStationsLoading ? (
        <Loading />
    ) : favStations.length === 0 ? (
        <View style={styles.container}>
            <Text>즐겨찾는 역이 없습니다.</Text>
        </View>
    ) : (
        <View style={styles.container}>
            <Text style={styles.title}>내가 즐겨찾기한 역</Text>
            <SafeAreaView style={styles.stationContainer}>
                <ScrollView>
                    {favStations.map((region, idx) => (
                        <View style={{ flexDirection: 'row' }} key={idx}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('역 정보', {
                                        id: region._id,
                                    });
                                }}
                            >
                                <Text style={styles.stationText}>
                                    {region.station}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    toggleFavStations(
                                        region._id,
                                        resourceToken,
                                        idx
                                    );
                                }}
                            >
                                <AntDesign
                                    name='star'
                                    size={28}
                                    color={
                                        toggleFavListStar[idx]
                                            ? '#FFC312'
                                            : '#dfe4ea'
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingHorizontal: 40,
    },
    title: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold',
    },
    stationContainer: {
        alignSelf: 'stretch',
        borderRadius: 10,
        height: 600,
    },
    stationText: {
        fontSize: 25,
        marginBottom: 7,
        marginRight: 5,
    },
});

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(FavStations);
