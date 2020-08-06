import React, { useState } from 'react';
import * as Google from 'expo-google-app-auth';
import { Button } from 'react-native';
import * as Linking from 'expo-linking';
import axios from 'axios';
// 마무리 되면 axios 리팩토링!

const GoogleButton = () => {
    const [toggleClick, setToggleClick] = useState(false);
    const [src, setSrc] = useState(null);
    const ANDROID_CLIENT_ID =
        '499458411825-vqctkbs5ehf31ge8gpbnt28fq6nhpo68.apps.googleusercontent.com';
    const IOS_CLIENT_ID =
        'http://499458411825-5dhsuovaviqugpbdn71fkfob4h3rekn1.apps.googleusercontent.com/';

    const googleSignIn = async () => {
        try {
            //* expo google package 사용
            // 여기에 ios 클라 아이디를 추가 & app.json 처리가 있으면 해줘야 합니다
            const data = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                iosClientId: IOS_CLIENT_ID,
            });

            if (data.type === 'success') {
                console.log(data);
                const { data } = axios.post(
                    'http://192.168.0.40:5050/user/google',
                    {
                        google: data.accessToken,
                    },
                    {
                        withCredentials: true,
                    }
                );
            }

            //* 웹뷰 사용

            // Linking.openURL('http://3.34.197.112:5050/user/google');
            // const response = await axios.get(
            //     'http://3.34.197.112:5050/user/google/callback'
            // )
            // console.log(response);

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Button
                color='pink'
                title='구글'
                onPress={() => {
                    googleSignIn();
                }}
            />
        </>
    );
};

export default GoogleButton;
