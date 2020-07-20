import React from 'react';
import { StyleSheet, View } from 'react-native';

// react navigation 적용시 서치바를 스택 네비게이션의 상단 바로 어떻게 빼야 할 지 생각해보기
const Main = () => {
	return (
		<>
			<View style={styles.searchBar}></View>
			<View style={styles.plans}></View>
			<View style={styles.regions}></View>
			<View style={styles.courses}></View>
		</>
	);
};

const styles = StyleSheet.create({
	searchBar: {
		flex: 1,
		backgroundColor: 'blue',
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
