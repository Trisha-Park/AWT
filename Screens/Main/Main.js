import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import CheckList from '../../Component/Main/CheckList';
import Regions from '../../Component/Main/Regions';
import Courses from '../../Component/Main/Courses';

import { planDummy, regionDummy, courseDummy } from '../../FakeData/mainData';

const Main = ({ navigation }) => {
    const [plans, setPlans] = useState([...planDummy]); // 메인 화면의 계획 체크리스트입니다
    const [regions, setRegions] = useState([...regionDummy]); // 메인 화면의 추천지역입니다
    const [courses, setCourses] = useState([...courseDummy]); // 메인 화면의 추천코스입니다

    // 서치 아이콘에 onPress 이벤트를 걸고 -> 리액트 네비게이터로 Select 창으로 이동
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Text>A Week Trip</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Select');
                    }}
                >
                    <FontAwesome name='search' size={24} color='black' />
                </TouchableOpacity>
            </View>
            <View style={styles.plans}>
                <ViewPager style={styles.viewPager}>
                    {plans.map((plan, idx) => (
                        <CheckList dummy={plan} key={idx} />
                    ))}
                </ViewPager>
            </View>
            <View style={styles.regions}>
                <Regions regions={regions} navigation={navigation} />
            </View>
            <View style={styles.courses}>
                <Courses courses={courses} navigation={navigation} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
        alignSelf: 'stretch',
        paddingHorizontal: 15,
    },
    plans: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    regions: {
        flex: 2,
        paddingHorizontal: 15,
    },
    courses: {
        flex: 3,
        paddingHorizontal: 15,
    },
    viewPager: {
        flex: 0.8,
        alignSelf: 'stretch',
        marginHorizontal: 10,
    },
});

export default Main;
