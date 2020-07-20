import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem } from 'native-base';

const CourseCard = ({ hashTags }) => {
	return (
		<Card style={styles.card}>
			<CardItem>
				{hashTags.map((tag, idx) => (
					<Text key={idx}>{tag} </Text>
				))}
			</CardItem>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		flex: 0.9,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
});

export default CourseCard;
