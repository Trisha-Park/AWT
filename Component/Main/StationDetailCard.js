import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, CardItem } from 'native-base';
import * as Linking from 'expo-linking';

const StationDetailCard = ({ data }) => {
    const { blogName, date, description, href, title } = data;
    return (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={() => {
                    Linking.openURL(href);
                }}
            >
                <View style={styles.cardHeader}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.headerInfo}>
                        <Text style={styles.infos}>{blogName}</Text>
                        <Text style={styles.infos}>{date}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f1f2f6',
        borderRadius: 8,
        padding: 10,
    },
    cardHeader: {
        marginBottom: 8,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    headerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infos: {
        fontSize: 12,
        color: '#747d8c',
    },
    description: {
        fontSize: 11,
        color: '#747d8c',
    },
});

export default StationDetailCard;
