import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Facebook from 'expo-facebook';
import axios from 'axios';

import { AntDesign } from '@expo/vector-icons';

import { connect } from 'react-redux';
import {
    FBAuthStart,
    FBAuthSuccess,
    FBAuthFailure,
} from '../../Actions/authActions';

const FaceBookButton = ({ FBAuthStart, FBAuthSuccess, FBAuthFailure }) => {
    const APP_ID = '293945551667829';

    const FBSignIn = async () => {
        try {
            FBAuthStart(true);
            await Facebook.initializeAsync(APP_ID);
            const data = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email'],
            });

            if (data.type === 'success') {
                const userData = await axios.post(
                    'http://3.34.197.112:5050/user/facebook',
                    {
                        fbAccessToken: data.token,
                    },
                    {
                        withCredentials: true,
                    }
                );
                FBAuthSuccess(
                    false,
                    { name: userData.data.name, userId: userData.data.userId },
                    userData.data.token
                );
            } else {
                FBAuthFailure(false);
                alert('로그인에 실패했습니다.');
            }
        } catch (error) {
            FBAuthFailure(false);
            alert(`Facebook Login Error: ${error}`);
        }
    };

    return (
        <TouchableOpacity
            title='페이스북'
            onPress={() => {
                FBSignIn();
            }}
            style={styles.fbButton}
        >
            <AntDesign name='facebook-square' size={22} color='#fff' />
            <Text style={styles.fbTitle}>페이스북으로 로그인하기</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fbButton: {
        width: 250,
        paddingVertical: 10,
        backgroundColor: '#405DAD',
        marginVertical: 6,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fbTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 8,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        FBAuthStart: (isLoggingIn) => dispatch(FBAuthStart(isLoggingIn)),
        FBAuthSuccess: (isLoggingIn, userInfo, resourceToken) =>
            dispatch(FBAuthSuccess(isLoggingIn, userInfo, resourceToken)),
        FBAuthFailure: (isLoggingIn, fbAuthError) =>
            dispatch(FBAuthFailure(isLoggingIn, fbAuthError)),
    };
};

export default connect(null, mapDispatchToProps)(FaceBookButton);
