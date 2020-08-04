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

import { stationDummy } from '../../FakeData/mainData';

const Search = ({ navigation }) => {
    const [stations, setStaions] = useState([]);
    const [favStations, setFavStations] = useState([
        ...stationDummy.currentSelected,
    ]);
    const [isStationLoading, setIsStationLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [toggleStar, setToggleStar] = useState([]);

    const getStations = async () => {
        try {
            setIsStationLoading(true);
            const { data } = await axios.get(
                'http://192.168.0.40:5050/station'
            );
            setStaions([...data]);
            setToggleStar(Array(data.length).fill(false));
            setIsStationLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const searchStations = async () => {
        try {
            setIsStationLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.40:5050/station/search?content=${searchValue}`
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
        getStations();
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
                                    ToastAndroid.show(
                                        '검색어를 입력해주세요.',
                                        ToastAndroid.BOTTOM,
                                        ToastAndroid.LONG
                                    );
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
                {/* {favStations.map((region, idx) => (
                    <View style={{ flexDirection: 'row' }} key={idx}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('StationDetail', {
                                    region, // id로 변경하기
                                });
                            }}
                        >
                            <Text style={{ fontSize: 20 }}>{region}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name='star' size={24} color='black' />
                        </TouchableOpacity>
                    </View>
                ))} */}
            </View>
            <View style={styles.allResult}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {isStationLoading ? (
                        <Text>로딩중...</Text>
                    ) : (
                        stations.map((region, idx) => (
                            <View style={{ flexDirection: 'row' }} key={idx}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('StationDetail', {
                                            id: region._id,
                                        });
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            marginBottom: 10,
                                            marginRight: 5,
                                        }}
                                    >
                                        {region.station}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        // TODO: 서버의 유저파트가 완료되면 할것
                                        setToggleStar((prevState) => [
                                            ...prevState.slice(0, idx),
                                            !prevState[idx],
                                            ...prevState.slice(idx + 1),
                                        ]);
                                    }}
                                >
                                    <AntDesign
                                        name='star'
                                        size={20}
                                        color={
                                            toggleStar[idx]
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
        paddingBottom: 20,
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
        paddingBottom: 10,
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

export default Search;
