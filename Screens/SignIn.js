import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Button color='red' style={styles.google} title='구글' />
            <Button color='gold' style={styles.kakao} title='카카오' />
            <Button color='skyblue' style={styles.naver} title='네이버' />
            <Button
                color='magenta'
                style={styles.noneLogin}
                title='비로그인으로 둘러보기'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    google: {
        
    },
    kakao: {

    },
    naver: {

    },
    noneLogin: {

    },
});

export default SignIn;
