import axios from "axios";

const instance = axios.create(  // creation instance of axios
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: { 'API-KEY': '0bc36b50-217b-4c89-a4ca-983f7670f047' }
    }
)

export const authAPI = {
    async getMe() {
        const response = await instance.get(`auth/me`);
        return response.data;
    }
}

export const usersAPI = {
    async getUsers (currentPage = 1, pageSize) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    }
}

export const profileAPI = {
    async getProfile(userId) {
        const response = await instance.get(`profile/${userId}`);
        return response.data;
    }
}

export const followUnfollowAPI = {
    async followUser (userId) {
        const response = await instance.post(`follow/${userId}`);
        return response.data.resultCode;        
    },

    async unFollowUser (userId) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data.resultCode;
    }
}

