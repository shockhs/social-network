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

export const setPhoto = (photo) => {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put('profile/photo', formData, {
        'Content-Type': 'multipart/form-data'
    })
}

export const getUserProfileRequest = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => response.data)
}

export const setStatus = (status) => {
    return instance.put(`profile/status`, { status })
}

export const saveProfile = (profile) => {
    return instance.put(`profile`, profile)
}