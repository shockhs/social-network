export const getProfile = (state) => {
    return state.profilePage.profile;
}
export const getAuthId = (state) => {
    return state.authPage.id;
}
export const getLoadingStatus = (state) => {
    return state.profilePage.isLoading;
}
export const getProfileStatus = (state) => {
    return state.profilePage.status;
}

export const getPosts = (state) => {
    return state.profilePage.postsData;
}

export const getAuthLogin = (state) => {
    return state.authPage;
}

