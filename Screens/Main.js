import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import CheckList from '../CheckList';

// 계획이 있을 때의 테스트를 위한 더미데이터입니다.
const planDummy = [
	{
		day: 1,
		region: '서울',
		toDos: ['일어나기', '집에가기', '저녁먹기'],
	},
	{
		day: 2,
		region: '영지',
		toDos: ['다키스트던전 하기', '골드 파밍하기'],
	},
	{
		day: 3,
		region: '로드란',
		toDos: ['다크소울 하기', '몬스터잡기'],
	},
];

// 계획의 없을 때의 테스트를 위한 더미데이터입니다.
const noPlanDummy = [
	{
		day: null,
		region: '내일로를 시작하세요',
		toDos: ['계획을 설정해 보세요!'],
	},
];

// react navigation 적용시 서치바를 스택 네비게이션의 상단 바로 어떻게 빼야 할 지 생각해보기
const Main = () => {
	return (
		<>
			<View style={styles.searchBar}>
				<Text>A Week Trip</Text>
				<FontAwesome name='search' size={24} color='black' />
			</View>
			<View style={styles.plans}>
				<ViewPager style={styles.viewPager}>
					{planDummy.map((plan, idx) => (
						<CheckList dummy={plan} key={idx} />
					))}
				</ViewPager>
			</View>
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
	plans: {
		flex: 4,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center',
	},
	regions: {
		flex: 2,
		backgroundColor: 'red',
	},
	courses: {
		flex: 3,
		backgroundColor: 'blue',
	},
	viewPager: {
		flex: 0.8,
		alignSelf: 'stretch',
		marginHorizontal: 10,
	},
});

export default Main;
