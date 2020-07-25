import React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';

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
        <FlatList
            data={fullDates}
            renderItem={renderItem}
            keyExtractor={(item) => item.day}
            style={styles.container}
        />
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
});

export default PlanInfo;
