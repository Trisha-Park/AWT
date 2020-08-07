import React from 'react';
import { StyleSheet, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import CourseCard from './CourseCard';

const Courses = ({ courses, navigation }) => {
    return (
        <>
            <Text style={styles.title}>추천 코스</Text>
            <ViewPager style={styles.viewPager}>
                {courses.map((course) => (
                    <CourseCard
                        course={course}
                        navigation={navigation}
                        key={course.id}
                    />
                ))}
            </ViewPager>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10,
        color: '#222f3e',
    },
    viewPager: {
        flex: 0.8,
        alignSelf: 'stretch',
    },
});

export default Courses;
