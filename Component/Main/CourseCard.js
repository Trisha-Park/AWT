import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base';

// TouchableOpacity로 감싸주고 onPress 이벤트에 메소드 적용
const CourseCard = ({ course, navigation }) => {
    const { hashTag } = course;
    return (
        <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => {
                navigation.navigate('CourseDetail', {
                    course,
                });
            }}
        >
            <Card style={styles.card}>
                <CardItem>
                    {hashTag.map((tag, idx) => (
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
        borderRadius: 10,
        paddingVertical: 50,
    },
});

export default CourseCard;
