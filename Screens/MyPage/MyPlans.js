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

const MyPlans = ({ navigation }) => {
    const [myPlans, setMyPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const USER_ID = '1';

    const getMyPlans = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.40:5050/plan/${USER_ID}`
            );
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
                        list: item.list,
                        id: item._id,
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
        <View>
            <Text>새 계획을 만들어보세요!</Text>
        </View>
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
        padding: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    title: {
        fontSize: 25,
    },
});

export default MyPlans;
