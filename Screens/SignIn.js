import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import GoogleButton from '../Component/Auth/GoogleButton';
import FaceBookButton from '../Component/Auth/FaceBookButton';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 4,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}
            >
                <Image
                    source={require('../assets/logo.png')}
                    style={{ width: 150, height: 150 }}
                />
            </View>
            <View
                style={{
                    flex: 4,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                <GoogleButton />
                <FaceBookButton />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default SignIn;
