import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import StationDetailSlider from '../StationDetailSlider';

const dummy = {
	sookBak: ['숙박1', '숙박2', '숙박3'],
	gwanGwang: ['관광1', '관광2', '관광3'],
	foods: ['마싯는거', '먹고싶어요', '짱마싯는거'],
};

// 뒤로가기 있는 헤더는 스택 네비게이터를 적용시키면 자동으로 생길 예정입니다
const StationDetail = () => {
	const { sookBak, gwanGwang, foods } = dummy;

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerTitle}>안동</Text>
				<Text>안동조아 우분투조아</Text>
			</View>
			<StationDetailSlider detailInfo={sookBak} />
			<StationDetailSlider detailInfo={gwanGwang} />
			<StationDetailSlider detailInfo={foods} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
	},
	headerContainer: {
		marginLeft: 20,
		marginVertical: 30,
	},
	headerTitle: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	viewPager: {
		marginHorizontal: 20,
		flex: 0.8,
	},

	cardsContainer: {
		flex: 1,
		alignSelf: 'stretch',
	},
});

export default StationDetail;
