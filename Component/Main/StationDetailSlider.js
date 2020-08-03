import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import StationDetailCard from './StationDetailCard';

const StationDetailSlider = ({ detailInfo, title }) => {
    return (
        <View style={styles.cardsContainer}>
            <Text>{title}</Text>
            <ViewPager style={styles.viewPager}>
                {detailInfo.map((info, idx) => (
                    <StationDetailCard key={idx} data={info} />
                ))}
            </ViewPager>
        </View>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        marginHorizontal: 20,
        flex: 0.8,
    },

    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
    },
});

export default StationDetailSlider;
