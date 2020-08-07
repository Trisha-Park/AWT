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
    userInfo: {},
    resourceToken: null,
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
                userInfo: action.userInfo,
                resourceToken: action.resourceToken,
            };
        }
        case FB_AUTH_FAILURE: {
            return {
                ...state,
                isLoggingIn: action.isLoggingIn,
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
                userInfo: action.userInfo,
                resourceToken: action.resourceToken,
            };
        }
        case GOOGLE_AUTH_FAILURE: {
            return {
                ...state,
                isLoggingIn: action.isLoggingIn,
            };
        }
        case SIGN_OUT_SUCCESS: {
            return {
                ...state,
                userInfo: {},
                resourceToken: null,
            };
        }
        default: {
            return state;
        }
    }
};
