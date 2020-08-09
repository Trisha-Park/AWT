import React from 'react';
import { StyleSheet, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import CourseCard from './CourseCard';

const Courses = ({ courses, navigation }) => {
    return (
        <>
            <Text style={styles.title}>추천 코스</Text>
            <ViewPager style={styles.viewPager} pageMargin={10}>
                {courses.map((course, idx) => (
                    <CourseCard
                        course={course}
                        navigation={navigation}
                        key={course.id}
                        index={idx + 1}
                    />
                ))}
            </ViewPager>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 20,
        color: '#222f3e',
    },
    viewPager: {
        flex: 0.8,
    },
});

export default Courses;
