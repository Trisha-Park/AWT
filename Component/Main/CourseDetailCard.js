import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CourseDetailCard = ({ courseInfo }) => {
    const { region, day, title, course } = courseInfo;

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                    <Text style={styles.cardHeaderRegion}>{region}</Text>
                    <Text style={styles.cardHeaderInfo}>{title}</Text>
                </View>
                <Text style={styles.cardHeaderInfo}>{day}일차</Text>
            </View>
            <View>
                {course.map((item, idx) => (
                    <Text key={idx} style={styles.cardBodyText}>
                        {item}
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        backgroundColor: '#f1f2f6',
        borderRadius: 5,
        paddingVertical: 13,
        paddingHorizontal: 18,
        marginBottom: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7,
    },
    cardHeaderRegion: {
        marginRight: 10,
        fontSize: 19,
        fontWeight: 'bold',
    },
    cardHeaderInfo: {
        color: '#747d8c',
    },
    cardBodyText: {
        fontSize: 15,
        marginBottom: 2,
    },
});

export default CourseDetailCard;
