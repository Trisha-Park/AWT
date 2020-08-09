import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CourseCard = ({ course, navigation }) => {
    const { list, num } = course;
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    navigation.navigate('코스 정보', {
                        num,
                    });
                }}
            >
                {list.map((tag, idx) => (
                    <Text key={idx} style={styles.tag}>
                        {`${tag} `}
                    </Text>
                ))}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#f1f2f6',
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '18%',
    },
    tag: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CourseCard;
