import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Card, CardItem } from 'native-base';
import CheckListContent from './CheckListContent';

// 스탈수정..
const CheckList = ({ planItem }) => {
    return (
        <Card style={styles.card}>
            <CardItem style={styles.titles}>
                <Text>{planItem.day}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {planItem.region}
                </Text>
            </CardItem>
            <CardItem style={styles.items}>
                <ScrollView style={{ width: '100%' }}>
                    {planItem.toDos.map((toDo, idx) => (
                        <CheckListContent toDo={toDo} key={idx} />
                    ))}
                </ScrollView>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    titles: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    items: {
        height: 100,
    },
});

export default CheckList;
