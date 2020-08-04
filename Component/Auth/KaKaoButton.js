import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { FBAuthSuccess } from '../../Actions/authActions';

const KaKaoButton = ({ FBAuthSuccess }) => {
    return (
        <Button
            color='gold'
            title='카카오'
            onPress={() => {
                FBAuthSuccess(
                    false,
                    { userName: 'abc', id: '1' },
                    'sdaddsdads',
                    '122sd13a1ds31dsa'
                );
            }}
        />
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        FBAuthSuccess: (isLoggingIn, userInfo, authToken, resourceToken) =>
            dispatch(
                FBAuthSuccess(isLoggingIn, userInfo, authToken, resourceToken)
            ),
    };
};

export default connect(null, mapDispatchToProps)(KaKaoButton);
