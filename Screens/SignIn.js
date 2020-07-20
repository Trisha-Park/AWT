import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text>로그인페이지입니다</Text>
            <Button title='구글' />
            <Button title='카카오' />
            <Button title='네이버' />
            <Button title='비로그인으로 둘러보기' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SignIn;
