import React from 'react';
import * as Google from 'expo-google-app-auth';
import { Button } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    googleAuthStart,
    googleAuthSuccess,
    googleAuthFailure,
} from '../../Actions/authActions';
// 마무리 되면 axios 리팩토링!

const GoogleButton = ({
    googleAuthStart,
    googleAuthSuccess,
    googleAuthFailure,
}) => {
    const ANDROID_CLIENT_ID =
        '499458411825-vqctkbs5ehf31ge8gpbnt28fq6nhpo68.apps.googleusercontent.com';
    const IOS_CLIENT_ID =
        '499458411825-5dhsuovaviqugpbdn71fkfob4h3rekn1.apps.googleusercontent.com';

    const googleSignIn = async () => {
        try {
            //* expo google package 사용
            const userData = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                iosClientId: IOS_CLIENT_ID,
            });

            if (userData.type === 'success') {
                console.log(userData.accessToken);
                console.log(userData);
                const { data } = await axios.post(
                    'http://172.30.1.17:5050/user/google',
                    {
                        google: userData.accessToken,
                        googleName: userData.user.name,
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

const mapDispatchToProps = (dispatch) => {
    return {
        googleAuthStart: () => dispatch(googleAuthStart(isLoggingIn)),
        googleAuthSuccess: () =>
            dispatch(
                googleAuthSuccess(
                    isLoggingIn,
                    userInfo,
                    authToken,
                    resourceToken
                )
            ),
        googleAuthFailure: () =>
            dispatch(googleAuthFailure(isLoggingIn, googleAuthError)),
    };
};

export default connect(null, mapDispatchToProps)(GoogleButton);
