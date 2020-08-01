import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base';

// TouchableOpacity로 감싸주고 onPress 이벤트에 메소드 적용
const CourseCard = ({ course, navigation }) => {
    const { list, num } = course;
    return (
        <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => {
                navigation.navigate('CourseDetail', {
                    num,
                });
            }}
        >
            <Card style={styles.card}>
                <CardItem>
                    {list.map((tag, idx) => (
                        <Text key={idx}>{tag} </Text>
                    ))}
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
    },
    card: {
        flex: 0.9,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 45,
    },
});

export default CourseCard;
