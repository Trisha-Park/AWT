import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// 추천지역 그거입니다 더미데이터
const dummy = ['서울', '단양', '대구', '부산', '전주'];

const Regions = () => {
	return (
		<>
			<Text>추천 지역</Text>
			<View style={styles.container}>
				{dummy.map((region, idx) => (
					<View key={idx} style={styles.card}>
						<Text>{region}</Text>
					</View>
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

export default Regions;
