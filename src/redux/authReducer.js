import { getAuthStatusRequest } from '../api/API-login';


const SET_AUTH_STATUS = "authReducer/SET_AUTH_STATUS";
const SET_SUCCESS_STATUS = "authReducer/SET-SUCCESS-STATUS";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: null,
    pathRedirect: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_STATUS: {
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }
        }
        case SET_SUCCESS_STATUS: {
            return {
                ...state,
                pathRedirect: action.pathRedirect
            }
        }
        default: return state;
    }
}

export let setAuthStatus = (id, login, email, isAuth) => ({ type: SET_AUTH_STATUS, data: { id, login, email, isAuth } });
export let setRedirectUrl = (pathRedirect) => ({ type: SET_SUCCESS_STATUS, pathRedirect });

export function getAuthStatus() {
    return async function (dispatch) {
        let response = await getAuthStatusRequest();
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthStatus(id, login, email, true));
        } else {
            dispatch(setAuthStatus(null, null, null, false));
        }
    }
}


export default authReducer;