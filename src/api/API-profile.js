import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "9832db98-b9d3-460c-9cab-5d06ff193b07" },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const getStatus = (userId) => {
    return (
        instance.get(`profile/status/${userId}`)
    )
}

export const getUserProfile = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => response.data)
}

export const setStatus = (status) => {
    return instance.put(`profile/status`, { status })
}