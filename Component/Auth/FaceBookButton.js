import React from 'react';
import { Button } from 'react-native';

const FaceBookButton = ({ setIsLogin }) => {
    return (
        <Button
            color='skyblue'
            title='페이스북'
            onPress={(e) => {
                setIsLogin(true);
            }}
        />
    );
};

export default FaceBookButton;
