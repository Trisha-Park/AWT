import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';

import CourseDetailCard from '../CourseDetailCard';

const dummy = [
	{
		region: '서울',
		day: '1',
		title: '우리집 투어',
		course: [
			'멋있는 현관문',
			'아주멋있는 베란다',
			'정말정말 멋있는 씽크대',
			'우리집 명물 바다오징어',
		],
	},
	{
		region: '서울',
		day: '2',
		title: '너네집 투어',
		course: [
			'멋있는 현관문',
			'아주멋있는 베란다',
			'정말정말 멋있는 씽크대',
			'우리집 명물 바다오징어',
		],
	},
	{
		region: '서울',
		day: '3',
		title: '쟤네집 투어',
		course: [
			'멋있는 현관문',
			'아주멋있는 베란다',
			'정말정말 멋있는 씽크대',
			'우리집 명물 바다오징어',
		],
	},
	{
		region: '서울',
		day: '4',
		title: '쟤네집 투어',
		course: [
			'멋있는 현관문',
			'아주멋있는 베란다',
			'정말정말 멋있는 씽크대',
			'우리집 명물 바다오징어',
		],
	},
	{
		region: '서울',
		day: '5',
		title: '쟤네집 투어',
		course: [
			'멋있는 현관문',
			'아주멋있는 베란다',
			'정말정말 멋있는 씽크대',
			'우리집 명물 바다오징어',
		],
	},
];

const CourseDetail = () => {
	return (
		<SafeAreaView styles={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				{dummy.map((courseInfo, idx) => (
					<CourseDetailCard courseInfo={courseInfo} key={idx} />
				))}
				<Button title='내 계획으로' />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		alignItems: 'center',
		paddingTop: Constants.statusBarHeight,
	},
});

export default CourseDetail;
