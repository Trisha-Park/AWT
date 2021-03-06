import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

import LoadingScreen from '../Loading';
import { connect } from 'react-redux';

const MyPlans = ({ navigation, resourceToken, userInfo }) => {
    const [myPlans, setMyPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMyPlans = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get('http://3.34.197.112:5050/plan', {
                headers: {
                    authorization: resourceToken,
                },
                withCredentials: true,
            });
            setMyPlans([...data]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMyPlans();
    }, []);

    const isFocused = useIsFocused();

    useEffect(() => {
        try {
            if (isFocused) {
                getMyPlans();
            }
        } catch (error) {
            console.log(error);
        }
    }, [isFocused]);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('내 계획 알아보기', {
                        plans: item,
                    });
                }}
                style={styles.item}
            >
                <View>
                    <Text
                        style={styles.title}
                    >{`${userInfo.name}님의 ${item.order}번째 여행`}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return isLoading ? (
        <LoadingScreen />
    ) : (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={myPlans}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f2f6',
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    item: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        borderRadius: 8,
        marginVertical: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

const mapStateToProps = (state) => {
    return {
        userInfo: state.authReducer.userInfo,
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(MyPlans);
