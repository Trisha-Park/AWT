import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem } from 'native-base';

// TouchableOpacity로 감싸주고 onPress 이벤트에 메소드 적용
const CourseCard = ({ hashTags, setClickedCourse }) => {
    return (
        <Card style={styles.card}>
            <CardItem>
                {hashTags.map((tag, idx) => (
                    <Text key={idx}>{tag} </Text>
                ))}
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 0.9,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
});

export default CourseCard;
