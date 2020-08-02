import React from 'react';
import { Button } from 'react-native';

const KaKaoButton = ({ setIsLogin }) => {
    return (
        <Button
            color='gold'
            title='카카오'
            onPress={(e) => {
                setIsLogin(true);
            }}
        />
    );
};

export default KaKaoButton;
