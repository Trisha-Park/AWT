import React from 'react';
import { StyleSheet, Text, ScrollView, View, SafeAreaView } from 'react-native';
import CheckListContent from './CheckListContent';

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
            <SafeAreaView style={styles.items}>
                <ScrollView style={{ width: '100%' }}>
                    {planItem.toDos.map((toDo, idx) => (
                        <CheckListContent toDo={toDo} key={idx} />
                    ))}
                </ScrollView>
            </SafeAreaView>
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
        paddingVertical: 15,
        paddingHorizontal: 20,
        opacity: 0.9,
    },
    titles: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    items: {
        marginTop: 55,
        height: 130,
        width: '100%',
    },
});

export default CheckList;
