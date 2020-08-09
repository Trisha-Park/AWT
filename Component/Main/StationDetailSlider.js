import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import StationDetailCard from './StationDetailCard';

const StationDetailSlider = ({ detailInfo, title }) => {
    return (
        <View style={styles.cardsContainer}>
            <Text style={styles.title}>{title}</Text>
            <ViewPager style={styles.viewPager} pageMargin={10}>
                {detailInfo.map((info, idx) => (
                    <StationDetailCard key={idx} data={info} />
                ))}
            </ViewPager>
        </View>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        flex: 0.85,
    },

    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default StationDetailSlider;
