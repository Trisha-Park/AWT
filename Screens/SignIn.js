import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';

import GoogleButton from '../Component/Auth/GoogleButton';
import FaceBookButton from '../Component/Auth/FaceBookButton';

const SignIn = () => {
    return (
        <ImageBackground
            source={require('../assets/mainLoading.png')}
            style={styles.container}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>기차여행을 시작해보세요!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <GoogleButton />
                <FaceBookButton />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    titleContainer: {
        justifyContent: 'flex-end',
        flex: 1,
        marginTop: 30,
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
});

export default SignIn;
