import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Linking from 'expo-linking';

import { sliceTitle, sliceText } from '../../helper/Helpers';

const StationDetailCard = ({ data }) => {
    const { blogName, date, description, href, title, thumb } = data;

    return (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={() => {
                    Linking.openURL(href);
                }}
                style={styles.cardButton}
            >
                <View style={styles.top}>
                    <Image style={styles.image} source={{ uri: thumb }} />
                    <View style={styles.cardHeader}>
                        <Text style={styles.title}>{sliceTitle(title)}</Text>
                        <View style={styles.headerInfo}>
                            <Text style={{ ...styles.infos, fontSize: 12 }}>
                                {blogName}
                            </Text>
                            <Text style={{ ...styles.infos, fontSize: 10 }}>
                                {date}
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.description}>
                        {sliceText(description)}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f1f2f6',
        borderRadius: 8,
        padding: 8,
    },
    top: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginBottom: 3,
    },
    cardButton: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    cardHeader: {
        marginBottom: 8,
    },
    headerInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    image: {
        width: 45,
        height: 45,
        resizeMode: 'cover',
        borderRadius: 5,
        marginRight: 15,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    infos: {
        color: '#747d8c',
    },
    description: {
        fontSize: 11,
        color: '#747d8c',
    },
});

export default StationDetailCard;
