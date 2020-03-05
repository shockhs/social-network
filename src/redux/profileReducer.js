import { getUserProfile, saveProfile, getStatus, setStatus, setPhoto } from '../api/API-profile';

const ADD_POST = "profileReducer/ADD-POST";
const DELETE_POST = "profileReducer/DELETE-POST";
const SET_USER_PROFILE = "profileReducer/SET-USER-PROFILE";
const SET_LOADING_STATUS = "profileReducer/SET-LOADING-STATUS";
const SET_PROFILE_STATUS = "profileReducer/SET-PROFILE-STATUS";
const SET_AVATAR = "profileReducer/SET-AVATAR";


let initialState = {
    postsData: [
        { id: 1, likesCount: 232, message: "Тестовое сообщение 1" },
        { id: 2, likesCount: 15, message: "Тестовое сообщение 2" },
        { id: 3, likesCount: 24, message: "Тестовое сообщение 3" },
        { id: 4, likesCount: 55, message: "Тестовое сообщение 4" },
        { id: 5, likesCount: 125, message: "Тестовое сообщение 5" }
    ],
    profile: null,
    status: "",
    isLoading: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: 15, likesCount: 0, message: action.post }]
            }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_LOADING_STATUS: {
            return {
                ...state, isLoading: action.status
            };
        }
        case SET_AVATAR: {
            return {
                ...state, profile: { ...state.profile, photos: action.photos }
            };
        }
        case DELETE_POST: {
            return {
                ...state, postsData: [...state.postsData.filter(post => post.id !== action.id)]
            };
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state, status: action.status
            };
        }
        default: return state;
    }
}

export let addPostActionCreater = (post) => ({ type: ADD_POST, post }); //add post
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile }); // set profile for ProfileInfo
export let setUpdatedAvatar = (photos) => ({ type: SET_AVATAR, photos }); // new photo dispatch
export let setPreloader = (status) => ({ type: SET_LOADING_STATUS, status }); // preloader for updatings
export let setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status }); // status
export let deletePostActionCreater = (id) => ({ type: DELETE_POST, id }); // doesn`t use

export let updateUserProfileAvatar = (avatar) => {
    debugger;
    return async (dispatch) => {
        let response = await setPhoto(avatar)
        if (response.data.resultCode === 0) {
            dispatch(setUpdatedAvatar(response.data.data.photos));
        }
    }
}

export let getUserProfileThunk = (userId) => {
    return async (dispatch) => {
        dispatch(setPreloader(true));
        let response = await getUserProfile(userId);
        dispatch(setPreloader(false));
        dispatch(setUserProfile(response));
    }
}

export let saveProfileEdits = (data) => {
    debugger;
    return async (dispatch,getState) => {
        let id = getState().authPage.id;
        let response = await saveProfile(data);
        if (response.data.resultCode === 0) {
            debugger;
            let data = await getUserProfile(id);
            dispatch(setUserProfile(data));
        }
    }
}

export let getUserProfileStatusThunk = (userId) => {
    return async (dispatch) => {
        let response = await getStatus(userId);
        if (response.status === 200) {
            dispatch(setProfileStatus(response.data));
        }
    }
}

export let setUserProfileStatusThunk = (status) => {
    return async (dispatch) => {
        let response = await setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status));
        }
    }
}


export default profileReducer;