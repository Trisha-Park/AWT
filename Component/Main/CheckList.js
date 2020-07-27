import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Card, CardItem, View } from 'native-base';
import CheckListContent from './CheckListContent';

const CheckList = ({ dummy }) => {
    return (
        <Card style={styles.card}>
            <View style={styles.titles}>
                <Text>{dummy.day}일차</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {dummy.region}
                </Text>
            </View>
            <View style={styles.items}>
                <ScrollView style={{ width: '100%' }}>
                    {dummy.toDos.map((toDo, idx) => (
                        <CheckListContent toDo={toDo} key={idx} />
                    ))}
                </ScrollView>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 15,
    },
    titles: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 5,
        paddingBottom: 5,
    },
    items: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: 100,
    },
});

export default CheckList;
