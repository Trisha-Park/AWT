import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import PlanRegionCard from '../../Component/Plan/PlanRegionCard';
import PlanCardPlus from '../../Component/Plan/PlanCardPlus';
import { Button } from 'native-base';

const PlanInfoDetail = () => {
    const [regions, setRegions] = useState(['']);

    const addRegionCard = () => {
        setRegions((prevState) => [...prevState, '']);
        // 전체 플랜 state 배열에 하나 공간 더 만드는게 필요합니다
    };

    return (
        <View style={styles.container}>
            <ViewPager style={styles.slider}>
                {regions.map((region, idx) => (
                    <PlanRegionCard key={idx} />
                ))}

                <PlanCardPlus addRegionCard={addRegionCard} />
            </ViewPager>
            <Button block>
                <Text>저장</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    slider: {
        alignSelf: 'stretch',
        marginHorizontal: 10,
        height: 450,
    },
});

export default PlanInfoDetail;
