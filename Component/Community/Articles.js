import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';

const Articles = ({ article }) => {
    const { updatedAt, title, name } = article;

    let dateForm = dayjs(updatedAt);

    return (
        <View style={styles.article}>
            <View
                style={{
                    height: 70,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View>
                <Text style={styles.date}>{dateForm.format('YYYY.MM.DD')}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    article: {
        height: 90,
        width: 400,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        margin: 5,
        padding: 10,
        borderRadius: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    name: {
        fontStyle: 'normal',
        color: '#454545',
        fontSize: 18,
        color: '#787878',
    },
    date: {
        fontSize: 18,
        color: '#787878',
    },
});

export default Articles;
