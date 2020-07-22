import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import PlanRegionCard from '../PlanRegionCard';
import { Button } from 'native-base';

const PlanInfoDetail = () => {
	return (
		<View style={styles.container}>
			<ViewPager style={styles.slider}>
				<PlanRegionCard />
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
	},
});

export default PlanInfoDetail;
