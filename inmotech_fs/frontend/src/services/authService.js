import axios from 'axios';

const API_URL = 'http://localhost:3000';

const authService = {
    login: async (username, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                User_user: username,
                User_password: password
            });
            
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            }
            
            return response.data;
        } catch (error) {
            throw error.response?.data || { message: 'Error en el servidor' };
        }
    },

    register: async (username, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/register`, {
                User_user: username,
                User_password: password
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || { message: 'Error en el servidor' };
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    getToken: () => {
        return localStorage.getItem('token');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    }
};

export default authService; 