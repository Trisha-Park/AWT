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

const MyPlans = ({ navigation, resourceToken }) => {
    const [myPlans, setMyPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMyPlans = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get('http://192.168.0.40:5050/plan', {
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
                    navigation.navigate('MyPlanDetail', {
                        plans: item,
                    });
                }}
                style={styles.item}
            >
                <View>
                    <Text style={styles.title}>{`${item.order}번째 여행`}</Text>
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
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    item: {
        backgroundColor: '#f1f2f6',
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
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(MyPlans);
