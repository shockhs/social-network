import { Login, Logout, getAuthStatus } from '../api/API-login';
import { setAuthStatus } from './authReducer';
import { stopSubmit } from 'redux-form';


const SET_LOADING = "loginReducer/SET-LOADING"

let initialState = {
    isLoading: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.status
            }
        }
        default: return state;
    }
}

export let setLoadingStatus = (status) => ({ type: SET_LOADING, status });

export const UserLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(setLoadingStatus(true));
        Login(email, password, rememberMe).then(object => {
            if (object.data.resultCode === 0) {
                getAuthStatus().then(object => {
                    if (object.data.resultCode === 0) {
                        let { id, login, email } = object.data.data;
                        dispatch(setAuthStatus(id, login, email, true));
                    }
                }
                )
            } else {
                if (object.data.messages.length > 0)
                    dispatch(stopSubmit("login", { _error: object.data.messages[0] }))
            }
            dispatch(setLoadingStatus(false));
        })
    }
}

export const UserLogout = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await Logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthStatus(null, null, null, false));
        }
    }
}


export default loginReducer;