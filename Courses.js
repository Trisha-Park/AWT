import React from 'react';
import { StyleSheet, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import CourseCard from './CourseCard';

// 추천코스 테스트를 위한 더미데이터입니다.
const dummy = [
	{
		region: '서울',
		hashTag: ['#서울', '#미세먼지', '#도망가', '#배고파요', '#피곤해요'],
	},
	{
		region: '영지',
		hashTag: ['#영지', '#다키스트던전', '#갓겜', '#서커스', '#같이해요'],
	},
];

// 여기에 슬라이더 적용
const Courses = () => {
	return (
		<>
			<Text style={styles.title}>추천 코스</Text>
			<ViewPager style={styles.viewPager}>
				{dummy.map((course, idx) => (
					<CourseCard hashTags={course.hashTag} key={idx} />
				))}
			</ViewPager>
		</>
	);
};

const styles = StyleSheet.create({
	title: {
		marginBottom: 20,
	},
	viewPager: {
		flex: 0.8,
		alignSelf: 'stretch',
		marginHorizontal: 10,
	},
});

export default Courses;
