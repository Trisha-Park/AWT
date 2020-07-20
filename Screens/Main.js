import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';

// react navigation 적용시 서치바를 스택 네비게이션의 상단 바로 어떻게 빼야 할 지 생각해보기
const Main = () => {
	return (
		<>
			<View style={styles.searchBar}>
				<Text style={styles.logoText}>A Week Trip</Text>
				<FontAwesome name='search' size={24} color='black' />
			</View>
			<View style={styles.plans}></View>
			<View style={styles.regions}></View>
			<View style={styles.courses}></View>
		</>
	);
};

const styles = StyleSheet.create({
	searchBar: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#f5f6fa',
		alignSelf: 'stretch',
		paddingHorizontal: 20,
	},
	logoText: {
		fontFamily: '',
		fontSize: 20,
	},
	plans: {
		flex: 4,
		backgroundColor: 'yellow',
	},
	regions: {
		flex: 2,
		backgroundColor: 'red',
	},
	courses: {
		flex: 3,
		backgroundColor: 'blue',
	},
});

export default Main;
