import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// 뷰 하나하나를 카드로
const CourseCard = ({ hashTags }) => {
	return (
		<>
			<View>
				{hashTags.map((tag, idx) => (
					<Text key={idx}>{tag} </Text>
				))}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	card: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		width: 50,
		height: 50,
		borderRadius: 25,
	},
});

export default CourseCard;
