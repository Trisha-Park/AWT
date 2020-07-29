import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import CheckList from '../../Component/Main/CheckList';
import Regions from '../../Component/Main/Regions';
import Courses from '../../Component/Main/Courses';

import { regionDummy, courseDummy, noPlanDummy } from '../../FakeData/mainData';
import { connect } from 'react-redux';

const Main = ({ navigation, plan, isPlanExist }) => {
    const [plans, setPlans] = useState(
        isPlanExist
            ? [
                  ...plan.list.reduce((arr, item, idx) => {
                      item[`day0${idx + 1}`]['tasks'].forEach((task) => {
                          arr.push({ day: `day0${idx + 1}`, ...task });
                      });
                      return arr;
                  }, []),
              ]
            : [...noPlanDummy]
    );
    const [regions, setRegions] = useState([...regionDummy]);
    const [courses, setCourses] = useState([...courseDummy]);

    useEffect(() => {
        // 수정된경우를 고려 이거 focus 이벤트로? 아님 replace?
        if (isPlanExist) {
            setPlans([
                ...plan.list.reduce((arr, item, idx) => {
                    item[`day0${idx + 1}`]['tasks'].forEach((task) => {
                        arr.push({ day: `day0${idx + 1}`, ...task });
                    });
                    return arr;
                }, []),
            ]);
        }
    });

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
                    {plans.map((planItem, idx) => (
                        <CheckList planItem={planItem} key={idx} />
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

const mapStateToProps = (state) => {
    return {
        plan: state.planReducer.plan,
        isPlanExist: state.planReducer.isPlanExist,
    };
};

export default connect(mapStateToProps)(Main);
