import { userConstants } from '../constants';

const userJson = localStorage.getItem('user');
var initialState = userJson !== null ? JSON.parse(userJson) : {};

export interface LoginState  {
    loggedIn: boolean
};

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}