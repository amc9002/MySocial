import axios from "axios";

const instance = axios.create(  // creation instance of axios
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: { 'API-KEY': 'e5bb403f-c733-47fa-a7b1-973e3a6702e4' }
    }
)

export const authAPI = {
    async me() {
        const response = await instance.get(`auth/me`);
        return response.data;
    }
}

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },

    async getProfile(userId) {
        const response = await instance.get(`profile/${userId}`);
        return response.data;
    }, 

    async follow(userId) {
        const response = await instance.post(`follow/${userId}`);
        return response.data.resultCode;
    },

    async unfollow(userId) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data.resultCode;
    }
}



