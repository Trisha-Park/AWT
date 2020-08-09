import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
} from 'react-native';

const CourseCard = ({ course, navigation, index }) => {
    const { list, num } = course;

    return (
        <ImageBackground
            source={require(`../../assets/main/course.png`)}
            style={styles.cardContainer}
        >
            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    navigation.navigate('코스 정보', {
                        num,
                    });
                }}
            >
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    {list.slice(0, 2).map((tag, idx) => (
                        <Text key={idx} style={styles.tag}>
                            {`${tag} `}
                        </Text>
                    ))}
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {list.slice(2, list.length).map((tag, idx) => (
                        <Text key={idx} style={styles.tag}>
                            {`${tag} `}
                        </Text>
                    ))}
                </View>
            </TouchableOpacity>
        </ImageBackground>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '15%',
    },
    tag: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default CourseCard;
