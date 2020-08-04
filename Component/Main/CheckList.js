import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import CheckListContent from './CheckListContent';

// 스탈수정..
const CheckList = ({ planItem }) => {
    return (
        <View style={styles.card}>
            <View style={styles.titles}>
                <Text
                    style={{ marginBottom: 2, fontSize: 13, color: '#747d8c' }}
                >
                    {planItem.day}
                </Text>
                <Text
                    style={{
                        fontSize: 23,
                        fontWeight: 'bold',
                        marginBottom: 5,
                        color: '#222f3e',
                    }}
                >
                    {planItem.region}
                </Text>
            </View>
            <View style={styles.items}>
                <ScrollView style={{ width: '100%' }}>
                    {planItem.toDos.map((toDo, idx) => (
                        <CheckListContent toDo={toDo} key={idx} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#f1f2f6',
        borderRadius: 5,
        paddingVertical: 13,
        paddingHorizontal: 18,
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
