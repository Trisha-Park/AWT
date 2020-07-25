import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { StackActions } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { Card } from 'native-base';

import PlanRegionCard from '../../Component/Plan/PlanRegionCard';

const PlanInfoDetail = ({ navigation }) => {
    const [regions, setRegions] = useState(['']);

    const addRegionCard = () => {
        setRegions((prevState) => [...prevState, '']);
        // 전체 플랜 state 배열에 하나 공간 더 만드는게 필요합니다
    };

    return (
        <View style={styles.container}>
            <ViewPager style={styles.slider}>
                {regions.map((region, idx) => (
                    <PlanRegionCard key={idx} />
                ))}
                <Card style={styles.card}>
                    <TouchableOpacity onPress={addRegionCard}>
                        <AntDesign name='pluscircleo' size={24} color='black' />
                    </TouchableOpacity>
                </Card>
            </ViewPager>
            <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => {
                    // TODO: 여기에서 저장된 내용들을 state에 넣어 올려주기

                    navigation.dispatch(StackActions.popToTop());
                    navigation.navigate('Main');
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
