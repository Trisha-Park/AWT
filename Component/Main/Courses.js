import React from 'react';
import { StyleSheet, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import CourseCard from './CourseCard';

// 여기에 슬라이더 적용
const Courses = ({ courses, setClickedCourse }) => {
    return (
        <>
            <Text style={styles.title}>추천 코스</Text>
            <ViewPager style={styles.viewPager}>
                {courses.map((course, idx) => (
                    <CourseCard
                        hashTags={course.hashTag}
                        key={idx}
                        setClickedCourse={setClickedCourse}
                    />
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
