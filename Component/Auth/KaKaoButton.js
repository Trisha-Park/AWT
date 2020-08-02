import React from 'react';
import { Button } from 'react-native';

const KaKaoButton = ({ setLoggedIn }) => {
    return (
        <Button
            color='gold'
            title='카카오'
            onPress={() => {
                setLoggedIn();
            }}
        />
    );
};

export default KaKaoButton;
