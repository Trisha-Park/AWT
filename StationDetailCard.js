import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem } from 'native-base';

const StationDetailCard = ({ info }) => {
	return (
		<Card style={styles.card}>
			<CardItem style={styles.titles}>
				<Text>{info}</Text>
			</CardItem>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
	},
});

export default StationDetailCard;
