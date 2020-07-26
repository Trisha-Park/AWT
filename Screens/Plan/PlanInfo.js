import React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import { StackActions } from '@react-navigation/native';

const PlanInfo = ({ route, navigation }) => {
    const {
        params: { fullDates },
    } = route;

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('PlanInfoDetail', {
                    day: item.day,
                    date: item.date,
                });
            }}
        >
            <Card style={styles.card}>
                <Text style={styles.day}>{item.day}</Text>
                <Text>{item.date}</Text>
            </Card>
        </TouchableOpacity>
    );

    return (
        <>
            <FlatList
                data={fullDates}
                renderItem={renderItem}
                keyExtractor={(item) => item.day}
                style={styles.container}
            />
            <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => {
                    // TODO: 여기에서 저장된 내용들을 state에 넣어 올려주기
                    // TODO: Main 가자마자 플랜 axios로 불러오고 isPlan === true 바꿔주기
                    navigation.dispatch(StackActions.popToTop());
                    navigation.navigate('Main');
                }}
            >
                <Text style={styles.btnTitle}>모든 계획 저장하기</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    card: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    saveBtn: {
        backgroundColor: 'blue',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        color: 'white',
    },
});

export default PlanInfo;

{
    /* <TouchableOpacity
style={styles.saveBtn}
onPress={() => {
    // TODO: 여기에서 저장된 내용들을 state에 넣어 올려주기
    // TODO: Main 가자마자 플랜 axios로 불러오고 isPlan === true 바꿔주기
    navigation.dispatch(StackActions.popToTop());
    navigation.navigate('Main');
}}
>
<Text style={styles.btnTitle}>저장</Text>
</TouchableOpacity> */
}
