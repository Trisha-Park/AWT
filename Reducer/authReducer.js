import {
    FB_AUTH_START,
    FB_AUTH_SUCCESS,
    FB_AUTH_FAILURE,
    SIGN_OUT_SUCCESS,
    GOOGLE_AUTH_START,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAILURE,
} from '../Actions/authActions';

const initialState = {
    isLoggingIn: false,
    userId: '',
    userName: '',
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
                userId: action.userId,
                userName: action.userName,
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
        case GOOGLE_AUTH_START: {
            return {
                ...state,
                isLoggingIn: action.isLoggingIn,
            };
        }
        case GOOGLE_AUTH_SUCCESS: {
            return {
                ...state,
                isLoggingIn: action.isLoggingIn,
                userId: action.userId,
                userName: action.userName,
                authToken: action.authToken,
                resourceToken: action.resourceToken,
            };
        }
        case GOOGLE_AUTH_FAILURE: {
            return {
                ...state,
                isLoggingIn: action.isLoggingIn,
                googleAuthError: action.googleAuthError,
            };
        }
        case SIGN_OUT_SUCCESS: {
            return {
                ...state,
                userId: null,
                userName: null,
                authToken: null,
                resourceToken: null,
            };
        }
        default: {
            return state;
        }
    }
};
