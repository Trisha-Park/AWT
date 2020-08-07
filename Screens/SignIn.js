import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

import GoogleButton from '../Component/Auth/GoogleButton';
import FaceBookButton from '../Component/Auth/FaceBookButton';

const SignIn = () => {
    return (
        <ImageBackground
            source={require('../assets/mainLoading.png')}
            style={styles.container}
        >
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
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '30%',
    },
});

export default SignIn;
