import {
    FB_AUTH_START,
    FB_AUTH_SUCCESS,
    FB_AUTH_FAILURE,
    SIGN_OUT_SUCCESS,
} from '../Actions/authActions';

const initialState = {
    isLoggingIn: false,
    userInfo: {},
    authToken: null,
    resourceToken: null,
    googleAuthError: '',
    fbAuthError: '',
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FB_AUTH_START: {
            return {
                ...state,
                isLoggingIn: action.isLoggingIn,
            };
        }
        case FB_AUTH_SUCCESS: {
            return {
                ...state,
                isLoggingIn: action.isLoggingIn,
                userInfo: { ...action.userInfo },
                authToken: action.authToken,
                resourceToken: action.resourceToken,
            };
        }
        case FB_AUTH_FAILURE: {
            return {
                ...state,
                isLoggingIn: action.isLoggingIn,
                fbAuthError: action.fbAuthError,
            };
        }
        case SIGN_OUT_SUCCESS: {
            return {
                ...state,
                userInfo: {},
                authToken: null,
                resourceToken: null,
            };
        }
        default: {
            return state;
        }
    }
};
