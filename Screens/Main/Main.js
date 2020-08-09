import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import axios from 'axios';

import { EvilIcons } from '@expo/vector-icons';

import CheckList from '../../Component/Main/CheckList';
import Regions from '../../Component/Main/Regions';
import Courses from '../../Component/Main/Courses';
import DeletePlanCard from '../../Component/Main/DeletePlanCard';

import { noPlanDummy } from '../../FakeData/mainData';
import { connect } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

const Main = ({ navigation, plan }) => {
    const [plans, setPlans] = useState([...noPlanDummy]);
    const [isPlanLoading, setIsPlanLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const [stations, setStations] = useState([]);

    const getStationLists = async () => {
        try {
            const { data } = await axios.get(
                'http://3.34.197.112:5050/station/random'
            );
            setStations([...data]);
        } catch (error) {
            console.log(error);
        }
    };

    const getCourseLists = async () => {
        try {
            const { data } = await axios.get(
                'http://3.34.197.112:5050/bestplan'
            );
            setCourses(
                data.map((item) => {
                    return {
                        id: item._id,
                        list: [...item.list],
                        num: item.num,
                    };
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    // 이미 계획 있는 상태 main 첫 렌더링
    useEffect(() => {
        try {
            setIsPlanLoading(true);
            if (plan._id) {
                setPlans([
                    ...plan.list.reduce((arr, item, idx) => {
                        item[`day0${idx + 1}`]['tasks'].forEach((task) => {
                            arr.push({ day: `day0${idx + 1}`, ...task });
                        });
                        return arr;
                    }, []),
                ]);
            }
            getStationLists();
            getCourseLists();
            setIsPlanLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const isFocused = useIsFocused();

    useEffect(() => {
        try {
            if (isFocused) {
                // plan이 수정되었을 때
                if (plan.list) {
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
                } else {
                    setPlans([...noPlanDummy]);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Text style={styles.logoTitle}>A WEEK TRIP</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('검색');
                    }}
                    style={styles.searchButton}
                >
                    <Text style={styles.searchText}>기차역 검색</Text>
                    <EvilIcons name='search' size={28} color='black' />
                </TouchableOpacity>
            </View>
            <View style={styles.plans}>
                <ViewPager style={styles.viewPager} pageMargin={10}>
                    {isPlanLoading ? (
                        <View>
                            <Text>로딩중</Text>
                        </View>
                    ) : (
                        plans.map((planItem, idx) => (
                            <CheckList planItem={planItem} key={idx} />
                        ))
                    )}
                    <DeletePlanCard navigation={navigation} />
                </ViewPager>
            </View>
            <View style={styles.regions}>
                <Regions stations={stations} navigation={navigation} />
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: 15,
        marginVertical: 20,
    },
    logoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchButton: {
        backgroundColor: '#f1f2f6',
        paddingLeft: 20,
        paddingRight: 6,
        paddingVertical: 6,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchText: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    plans: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '35%',
        marginBottom: 20,
    },
    regions: {
        width: '90%',
        height: '18%',
        marginBottom: 10,
    },
    courses: {
        width: '90%',
        height: '32%',
    },
    viewPager: {
        flex: 0.9,
        width: '90%',
        opacity: 0.9,
    },
});

const mapStateToProps = (state) => {
    return {
        plan: state.planReducer.plan,
    };
};

export default connect(mapStateToProps)(Main);
