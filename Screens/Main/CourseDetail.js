import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

import CourseDetailCard from '../../Component/Main/CourseDetailCard';
import { courseDetailDummy } from '../../FakeData/mainData';

const CourseDetail = ({ route }) => {
    const {
        params: { num },
    } = route;
    const [couresDetail, setCourseDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCourses = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.40:5050/bestplan/${num}`
            );
            setCourseDetail([...data[0].plan]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCourses();
    }, []);

    return isLoading ? (
        <View>
            <Text>로딩중..</Text>
        </View>
    ) : (
        <SafeAreaView styles={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {couresDetail.map((courseInfo, idx) => (
                    <CourseDetailCard courseInfo={courseInfo} key={idx} />
                ))}
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
        paddingVertical: Constants.statusBarHeight,
    },
});

export default CourseDetail;
