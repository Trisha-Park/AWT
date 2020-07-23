import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem, Body, Left } from 'native-base';

const CourseDetailCard = ({ courseInfo }) => {
    const { region, day, title, course } = courseInfo;

    return (
        <Card style={styles.card}>
            <CardItem style={styles.cardHeader}>
                <Left style={styles.cardHeaderLeft}>
                    <Text style={styles.cardHeaderRegion}>{region}</Text>
                    <Text>{title}</Text>
                </Left>
                <Text>{day}일차</Text>
            </CardItem>
            <CardItem>
                <Body>
                    {course.map((item, idx) => (
                        <Text key={idx}>{item}</Text>
                    ))}
                </Body>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
    },
    cardHeader: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    cardHeaderLeft: {
        alignItems: 'flex-end',
    },
    cardHeaderRegion: {
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CourseDetailCard;
