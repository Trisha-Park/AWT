import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CourseCard from './CourseCard';

// 추천코스 테스트를 위한 더미데이터입니다.
const dummy = [
	{ 서울: ['#서울', '#미세먼지', '#도망가', '#배고파요', '#피곤해요'] },
	{ 영지: ['#영지', '#다키스트던전', '#갓겜', '#서커스', '#같이해요'] },
];

// 여기에 슬라이더 적용
const Courses = () => {
	return (
		<>
			<Text>추천 코스</Text>
			<CourseCard hashTags={dummy[0].서울} />
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

export default Courses;
