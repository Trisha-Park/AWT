import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
} from 'react-native';
import axios from 'axios';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { connect } from 'react-redux';

const Search = ({ navigation, resourceToken }) => {
    const [stations, setStaions] = useState([]);
    const [favStations, setFavStations] = useState([]);

    const [isStationLoading, setIsStationLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    const [toggleFavListStar, setToggleFavListStar] = useState([]);
    const [toggleAllListStar, setToggleAllListStar] = useState([]);

    const toggleFavStations = async (stationId, resourceToken) => {
        try {
            await axios.put(
                `http://3.34.197.112:5050/user/favStation/${stationId}`,
                {},
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    const getAllStations = async () => {
        try {
            const { data } = await axios.get(
                'http://3.34.197.112:5050/station'
            );
            setStaions([...data]);
            getFavStations();
        } catch (error) {
            console.log(error());
        }
    };

    const getFavStations = async () => {
        try {
            const { data } = await axios.get(
                'http://3.34.197.112:5050/user/favStationList',
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
            );

            if (data.favStation.length === 0) {
                setToggleFavListStar([]);
                setFavStations([
                    { _id: 1, station: '즐겨찾기된 역이 없습니다.' },
                ]);
            } else {
                setToggleFavListStar([
                    ...Array(data.favStation.length).fill(true),
                ]);
                setFavStations([...data.favStation]);
            }

            const allStationsIds = stations.map((station) => station._id);
            const favStationsIds = data.favStation.map(
                (station) => station._id
            );

            setToggleAllListStar([
                ...allStationsIds.map((station) => {
                    let isStationExist = false;
                    if (favStationsIds.indexOf(station) !== -1) {
                        isStationExist = true;
                    }
                    return isStationExist;
                }),
            ]);
        } catch (error) {
            console.log(error);
        }
    };

    const searchStations = async () => {
        try {
            setIsStationLoading(true);
            const { data } = await axios.get(
                `http://3.34.197.112:5050/station/search?content=${searchValue}`
            );
            const stationDatas = data.map((stationData) => {
                return {
                    _id: stationData._id,
                    station: stationData.station,
                    stationNumber: stationData.stationNumber,
                };
            });

            setStaions([...stationDatas]);
            setIsStationLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setIsStationLoading(true);
        getAllStations();
        setIsStationLoading(false);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>어디로 가시나요?</Text>
                <View style={{ alignItems: 'flex-end' }}>
                    <View style={styles.headerInput}>
                        <TextInput
                            value={searchValue}
                            onChangeText={(text) => {
                                setSearchValue(text);
                            }}
                            style={styles.textInput}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                if (searchValue !== '') {
                                    searchStations();
                                    setSearchValue('');
                                } else {
                                    if (Platform.OS === 'android') {
                                        ToastAndroid.show(
                                            '검색어를 입력해주세요.',
                                            ToastAndroid.BOTTOM,
                                            ToastAndroid.LONG
                                        );
                                    }
                                }
                            }}
                        >
                            <EvilIcons name='search' size={28} color='black' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.currentSelected}>
                <Text style={styles.currentSelectedText}>즐겨찾기</Text>
                {favStations.map((region, idx) =>
                    favStations[0].stationNumber ? (
                        <View style={{ flexDirection: 'row' }} key={idx}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('역 정보', {
                                        id: region._id, // id로 변경하기
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
                                        resourceToken
                                    );
                                    getAllStations();
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
                    ) : (
                        <View key={idx}>
                            <Text style={styles.stationText}>
                                {favStations[0].station}
                            </Text>
                        </View>
                    )
                )}
            </View>
            <View style={styles.allResult}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {isStationLoading ? (
                        <View />
                    ) : (
                        stations.map((region, idx) => (
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
                                            resourceToken
                                        );
                                        getAllStations();
                                    }}
                                >
                                    <AntDesign
                                        name='star'
                                        size={28}
                                        color={
                                            toggleAllListStar[idx]
                                                ? '#FFC312'
                                                : '#dfe4ea'
                                        }
                                    />
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
    },
    header: {
        justifyContent: 'flex-end',
        borderBottomWidth: 0.5,
        borderBottomColor: '#bdc3c7',
        paddingBottom: 15,
        paddingTop: 20,
        paddingLeft: 10,
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 28,
    },
    currentSelected: {
        paddingLeft: 10,
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#bdc3c7',
    },
    currentSelectedText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 15,
    },
    stationText: {
        fontSize: 28,
        marginBottom: 7,
        marginRight: 5,
    },
    allResult: {
        paddingLeft: 10,
        paddingVertical: 15,
    },
    headerInput: {
        backgroundColor: '#f1f2f6',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        textAlign: 'left',
        fontSize: 20,
        width: 120,
    },
});

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(Search);
