import React from 'react';
import { Button } from 'react-native';
import * as Facebook from 'expo-facebook';
import axios from 'axios';
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
            // console.log(data);

            if (data.type === 'success') {
                // TODO: 페북에 토큰(or 데이터 전체)을 보내주기 (header 말고 body에 달라고 하십니다)
                // 서버에서 응답을 받기
                const userData = await axios.post(
                    'http://192.168.0.40:5050/user/facebook',
                    {
                        fbAccessToken: data.token,
                    }
                );
                // console.log('==========================');
                // console.log(userData.data);
                FBAuthSuccess(
                    false,
                    { name: userData.data.name, userId: userData.data.userId },
                    data.token,
                    userData.data.token
                );

                // if('JWT 토큰을 제대로 받아왔을 경우') {
                // asyncstorage에 토큰 및 유저 정보 저장 -> 닉네임 설정 창으로 이동 (닉네임 설정후 서버에 post 요청)
                // -> (요청이 성공적이었다면) 리덕스의 isLogin 참으로 변경 -> 메인 화면으로 이동하기
                // } else {
                // 다시 로그인하라고 하기?
                // }
            } else {
                // 로그인 실패 -> 다시 로그인하라고 하기.. 로그인 페이지로 돌려보냄
                FBAuthFailure(false, 'error');
                alert('로그인에 실패했습니다.');
            }
        } catch (error) {
            FBAuthFailure(false, error);
            alert(`Facebook Login Error: ${error}`);
        }
    };

    return (
        <Button
            color='skyblue'
            title='페이스북'
            onPress={() => {
                FBSignIn();
            }}
        />
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        FBAuthStart: (isLoggingIn) => dispatch(FBAuthStart(isLoggingIn)),
        FBAuthSuccess: (isLoggingIn, userInfo, authToken, resourceToken) =>
            dispatch(
                FBAuthSuccess(isLoggingIn, userInfo, authToken, resourceToken)
            ),
        FBAuthFailure: (isLoggingIn, fbAuthError) =>
            dispatch(FBAuthFailure(isLoggingIn, fbAuthError)),
    };
};

export default connect(null, mapDispatchToProps)(FaceBookButton);
