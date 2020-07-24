import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { stationDummy } from '../../FakeData/mainData';

const Select = ({ navigation }) => {
    const [currentStations, setCurrentStations] = useState([
        ...stationDummy.currentSelected,
    ]);
    const [stations, setStaions] = useState([...stationDummy.allResult]);

    // 클릭된 항목에 onPress 걸어서 네비게이션으로 정보 전달
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>어디로 가시나요?</Text>
                </View>
                <View style={styles.currentSelected}>
                    <Text style={styles.currentSelectedText}>최근검색</Text>
                    <View>
                        {currentStations.map((region, idx) => (
                            <TouchableOpacity
                                key={idx}
                                onPress={() => {
                                    navigation.navigate('StationDetail', {
                                        region,
                                    });
                                }}
                            >
                                <Text>{region}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.allResult}>
                    {stations.map((region, idx) => (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => {
                                navigation.navigate('StationDetail', {
                                    region,
                                });
                            }}
                        >
                            <Text>{region}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        justifyContent: 'flex-end',
        height: 80,
        borderBottomWidth: 0.5,
        borderBottomColor: '#bdc3c7',
        paddingBottom: 15,
        paddingLeft: 10,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
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
});

export default Select;
