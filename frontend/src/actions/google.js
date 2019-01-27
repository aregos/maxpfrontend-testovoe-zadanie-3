import {signIn, signOut} from "../helpers/googleHelper";

export const SIGNIN_REQUEST = 'LOGIN_REQUEST';
export const SIGNIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNOUT_REQUEST = 'LOGOUT_REQUEST';
export const SIGNOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SIGNOUT_FAILURE = 'LOGOUT_FAILURE';

export function logIn() {
    return dispatch => {
        dispatch({
            type: SIGNIN_REQUEST,
        })
        signIn().then(res => {
            if (res){
                dispatch({
                    type : SIGNIN_SUCCESS,
                    payload : res,
                })
            }
            else {
                dispatch({
                    type : SIGNIN_FAILURE,
                    payload : res,
                })
            }
        });
    }
}

export function logOut() {
    return dispatch => {
        dispatch({
            type: SIGNOUT_REQUEST,
        })
        signOut().then(res => {
                dispatch({
                    type: SIGNOUT_SUCCESS,
                    payload: res,
                })
                localStorage.clear();
        })

    }
}