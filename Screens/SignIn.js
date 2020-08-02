import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import KaKaoButton from '../Component/Auth/KaKaoButton';
import GoogleButton from '../Component/Auth/GoogleButton';
import FaceBookButton from '../Component/Auth/FaceBookButton';

const SignIn = ({ setLoggedIn }) => {
    // TODO: setIsLogin 함수로 빼고 (1차), 리덕스 적용

    return (
        <View style={styles.container}>
            <KaKaoButton setLoggedIn={setLoggedIn} />
            <FaceBookButton setLoggedIn={setLoggedIn} />
            <GoogleButton setLoggedIn={setLoggedIn} />
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
    google: {},
    kakao: {},
    naver: {},
    noneLogin: {},
});

export default SignIn;
