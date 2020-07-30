import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import CheckList from '../../Component/Main/CheckList';
import Regions from '../../Component/Main/Regions';
import Courses from '../../Component/Main/Courses';

import { regionDummy, courseDummy, noPlanDummy } from '../../FakeData/mainData';
import { connect } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

const Main = ({ navigation, plan }) => {
    const [plans, setPlans] = useState([...noPlanDummy]);
    const [isPlanLoading, setIsPlanLoading] = useState(false);

    const [regions, setRegions] = useState([...regionDummy]);
    const [courses, setCourses] = useState([...courseDummy]);

    // 이미 계획 있는 상태 main 첫 렌더링
    useEffect(() => {
        try {
            if (plan._id) {
                console.log(plan);
                setIsPlanLoading(true);
                setPlans([
                    ...plan.list.reduce((arr, item, idx) => {
                        item[`day0${idx + 1}`]['tasks'].forEach((task) => {
                            arr.push({ day: `day0${idx + 1}`, ...task });
                        });
                        return arr;
                    }, []),
                ]);
                setIsPlanLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const isFocused = useIsFocused();

    useEffect(() => {
        try {
            console.log(plan);
            if (isFocused) {
                // plan이 수정되었을 때
                if (plan.list) {
                    console.log(plan);
                    setIsPlanLoading(true);
                    setPlans([
                        ...plan.list.reduce((arr, item, idx) => {
                            item[`day0${idx + 1}`]['tasks'].forEach((task) => {
                                arr.push({ day: `day0${idx + 1}`, ...task });
                            });
                            return arr;
                        }, []),
                    ]);
                    setIsPlanLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, [isFocused]);

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
                    {isPlanLoading ? (
                        <View>
                            <Text>로딩중</Text>
                        </View>
                    ) : (
                        plans.map((planItem, idx) => (
                            <CheckList planItem={planItem} key={idx} />
                        ))
                    )}
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
        backgroundColor: '#f5f6fa',
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
    };
};

export default connect(mapStateToProps)(Main);
