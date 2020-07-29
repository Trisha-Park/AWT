import React from 'react';
import * as Google from 'expo-google-app-auth';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const GoogleButton = () => {
    const ANDROID_CLIENT_ID =
        '499458411825-vqctkbs5ehf31ge8gpbnt28fq6nhpo68.apps.googleusercontent.com';

    const storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (err) {
            console.log(err);
        }
    };

    const googleLogin = async () => {
        try {
            const data = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
            });

            if (data.type === 'success') {
                console.log(data);
                storeData('accessToken', data.accessToken);
                storeData('refreshToken', data.refreshToken);
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
                googleLogin();
            }}
        />
    );
};

export default GoogleButton;
