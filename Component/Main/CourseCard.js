import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
            <View style={styles.card}>
                {list.map((tag, idx) => (
                    <Text key={idx}>{tag} </Text>
                ))}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: '#f1f2f6',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        paddingTop: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CourseCard;
