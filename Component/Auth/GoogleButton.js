import React from 'react';
import * as Google from 'expo-google-app-auth';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import axios from 'axios';

import { connect } from 'react-redux';
import {
    googleAuthStart,
    googleAuthSuccess,
    googleAuthFailure,
} from '../../Actions/authActions';

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
            googleAuthStart(true);
            const data = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                iosClientId: IOS_CLIENT_ID,
            });

            if (data.type === 'success') {
                const userData = await axios.post(
                    'http://192.168.0.40:5050/user/google',
                    {
                        google: data.accessToken,
                        googleName: data.user.name,
                    },
                    {
                        withCredentials: true,
                    }
                );
                // console.log('=============================================');
                googleAuthSuccess(
                    false,
                    { name: data.user.name, userId: data.user.id },
                    userData.data.token
                );
            } else {
                googleAuthFailure(false);
                alert('로그인에 실패했습니다.');
            }
        } catch (error) {
            googleAuthFailure(false);
            alert(`Google Login Error: ${error}`);
        }
    };

    return (
        <TouchableOpacity
            onPress={() => {
                googleSignIn();
            }}
            style={styles.googleButton}
        >
            <Image
                source={require('../../assets/google.png')}
                style={styles.googleIcon}
            />
            <Text style={styles.googleTitle}>구글로 로그인하기</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    googleButton: {
        width: 250,
        paddingVertical: 10,
        backgroundColor: '#F5F6F6',
        marginVertical: 6,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleIcon: {
        width: 22,
        height: 22,
    },
    googleTitle: {
        color: '#565656',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 8,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        googleAuthStart: (isLoggingIn) =>
            dispatch(googleAuthStart(isLoggingIn)),
        googleAuthSuccess: (isLoggingIn, userInfo, resourceToken) =>
            dispatch(googleAuthSuccess(isLoggingIn, userInfo, resourceToken)),
        googleAuthFailure: (isLoggingIn, googleAuthError) =>
            dispatch(googleAuthFailure(isLoggingIn, googleAuthError)),
    };
};

export default connect(null, mapDispatchToProps)(GoogleButton);
