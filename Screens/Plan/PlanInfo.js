import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Card, Button } from 'native-base';

const dummy = [
    { day: '1일차', date: '7월 21일' },
    { day: '2일차', date: '7월 22일' },
    { day: '3일차', date: '7월 23일' },
    { day: '4일차', date: '7월 24일' },
    { day: '5일차', date: '7월 25일' },
    { day: '6일차', date: '7월 26일' },
    { day: '7일차', date: '7월 27일' },
];

const Item = ({ day, date }) => (
    <Card style={styles.card}>
        <Text style={styles.day}>{day}</Text>
        <Text>{date}</Text>
    </Card>
);

const PlanInfo = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <Item day={item.day} date={item.date} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dummy}
                renderItem={renderItem}
                keyExtractor={(item) => item.day}
                contentContainerStyle={{}}
            />
            <Button block>
                <Text>다음으로</Text>
            </Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
        alignItems: 'center',
    },
    card: {
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
});

export default PlanInfo;
