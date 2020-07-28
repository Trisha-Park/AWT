import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import KaKaoButton from '../Component/Auth/KaKaoButton';

const SignIn = ({ isLogin, setIsLogin }) => {
    return (
        <View>
            <Button color='pink' style={styles.google} title='구글' />
            <KaKaoButton />
            <Button color='skyblue' style={styles.naver} title='네이버' />
            <Button
                color='magenta'
                style={styles.noneLogin}
                title='비로그인으로 둘러보기'
                onPress={(e) => {
                    setIsLogin(true);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    google: {},
    kakao: {},
    naver: {},
    noneLogin: {},
});

export default SignIn;
