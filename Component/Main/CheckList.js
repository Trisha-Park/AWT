import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem } from 'native-base';
import CheckListContent from './CheckListContent';

const CheckList = ({ dummy }) => {
    return (
        <Card style={styles.card}>
            <CardItem style={styles.titles}>
                <Text>{dummy.day}일차</Text>
                <Text>{dummy.region}</Text>
            </CardItem>
            <CardItem style={styles.items}>
                {dummy.toDos.map((toDo, idx) => (
                    <CheckListContent toDo={toDo} key={idx} />
                ))}
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 10,
    },
    titles: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    items: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
});

export default CheckList;
