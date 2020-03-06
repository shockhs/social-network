import { getUsersRequest, unfollowUserRequest, followUserRequest } from '../api/API-users';

const FOLLOW_CHANGE = "usersReducer/FOLLOW-CHANGE";
const SET_USERS = "usersReducer/SET-USERS";
const SET_CURRENT_PAGE = "usersReducer/SET-CURRENT-PAGE";
const SET_COUNT = "usersReducer/SET-COUNT";
const SET_LOADING_STATUS = "usersReducer/SET-LOADING-STATUS";
const CHANGE_FOLLOWING_PROGRESS_STATUS = "usersReducer/CHANGE-FOLLOWING-PROGRESS-STATUS";
const SET_DEFAULT_PAGE = "usersReducer/SET-DEFAULT-PAGE";

let initialState = {
    users: [],
    currentPage: 1,
    countSize: 5,
    totalCount: null,
    isLoading: false,
    statusFollowing: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_CHANGE:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: !user.followed }
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] };
        }
        case SET_DEFAULT_PAGE: {
            return {
                users: [],
                currentPage: 1,
                countSize: 5,
                totalCount: null,
                isLoading: false,
                statusFollowing: []
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage 
            };
        }
        case SET_COUNT: {
            return {
                ...state, totalCount: action.count
            };
        }
        case CHANGE_FOLLOWING_PROGRESS_STATUS: {
            return {
                ...state, statusFollowing: state.statusFollowing.some(id => id === action.id)
                    ? state.statusFollowing.filter(id => id !== action.id)
                    : [...state.statusFollowing, action.id]
            }
        }
        case SET_LOADING_STATUS: {
            return {
                ...state, isLoading: action.status
            };
        }
        default: return state;
    }
}



export let follow = (userID) => ({ type: FOLLOW_CHANGE, userID });
export let unfollow = (userID) => ({ type: FOLLOW_CHANGE, userID });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let showMore = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export let setTotalUserCount = (count) => ({ type: SET_COUNT, count });
export let setPreloader = (status) => ({ type: SET_LOADING_STATUS, status });
export let followingCurrentProgress = (id) => ({ type: CHANGE_FOLLOWING_PROGRESS_STATUS, id });
export let setDefaultPage = () => ({ type: SET_DEFAULT_PAGE });

export const getUsers = (currentPage, countSize) => {
    debugger;
    return async (dispatch) => {
        dispatch(setPreloader(true));
        let data = await getUsersRequest(currentPage, countSize);
        dispatch(setPreloader(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUserCount(data.totalCount));
    }
}

const changeFollowStatus = async (dispatch, id, apiRequest, action) => {
    dispatch(followingCurrentProgress(id));
    let response = await apiRequest;
    if (response.data.resultCode === 0) {
        dispatch(action);
    }
    dispatch(followingCurrentProgress(id));
}

export const unfollowUser = (id) => {
    return (dispatch) => {
        changeFollowStatus(dispatch, id, unfollowUserRequest(id), unfollow(id))
    }
}

export const followUser = (id) => {
    return (dispatch) => {
        changeFollowStatus(dispatch, id, followUserRequest(id), follow(id))
    }
}

export default usersReducer;