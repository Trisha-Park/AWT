import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';

import CourseDetailCard from '../../Component/Main/CourseDetailCard';
import { courseDetailDummy } from '../../FakeData/mainData';

const CourseDetail = () => {
    const [couresDetail, setCourseDetail] = useState([...courseDetailDummy]);

    return (
        <SafeAreaView styles={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {couresDetail.map((courseInfo, idx) => (
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
