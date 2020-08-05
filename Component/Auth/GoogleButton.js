import React, { useState } from 'react';
import * as Google from 'expo-google-app-auth';
import { Button } from 'react-native';
import axios from 'axios';
import * as Linking from 'expo-linking';

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
            // // 여기에 ios 클라 아이디를 추가 & app.json 처리가 있으면 해줘야 합니다
            // const data = await Google.logInAsync({
            //     androidClientId: ANDROID_CLIENT_ID,
            //     iosClientId: IOS_CLIENT_ID
            // });

            // if (data.type === 'success') {
            //     console.log(data);
            //     // 서버한테 axios 요청
            // }

            //* 웹뷰 사용
            setToggleClick(true);

            Linking.openURL('http://13.125.93.29:5050/user/google');
            const response = await axios.get(
                'http://13.125.93.29:5050/user/google/callback'
            );
            console.log(response);
            // setSrc(response.data);
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
