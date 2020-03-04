export const getAllUsers = (state) => {
    return state.usersPage.users;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getCountSize = (state) => {
    return state.usersPage.countSize;
}

export const getLoadingStatus = (state) => {
    return state.usersPage.isLoading;
}

export const getFollowinStatus = (state) => {
    return state.usersPage.statusFollowing;
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}