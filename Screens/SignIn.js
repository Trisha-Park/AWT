import React from 'react';
import { StyleSheet, View } from 'react-native';

import KaKaoButton from '../Component/Auth/KaKaoButton';
import GoogleButton from '../Component/Auth/GoogleButton';
import FaceBookButton from '../Component/Auth/FaceBookButton';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <KaKaoButton />
            <FaceBookButton />
            <GoogleButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default SignIn;
