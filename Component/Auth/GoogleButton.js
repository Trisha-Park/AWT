import React from 'react';
import * as Google from 'expo-google-app-auth';
import { Button } from 'react-native';

// 마무리 되면 axios 리팩토링!

const GoogleButton = () => {
    const ANDROID_CLIENT_ID =
        '499458411825-vqctkbs5ehf31ge8gpbnt28fq6nhpo68.apps.googleusercontent.com';

    const googleSignIn = async () => {
        try {
            const data = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
            });

            if (data.type === 'success') {
                console.log(data);
                // TODO: 써버한테 데이터 쏴주고나서 JWT 토큰 받으면.. 그때 유저정보는 asyncstorage에 / 토큰은.. 어따주지 헬데답변 대기중입니다
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Button
            color='pink'
            title='구글'
            onPress={() => {
                googleSignIn();
            }}
        />
    );
};

export default GoogleButton;
