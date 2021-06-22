import axios from 'axios';

const API_URL = "http://localhost:5000/api/"

class AuthService {
    // POST new user info
    async register(username, email, password) {
        await axios.post(API_URL + 'signup', { username, email, password })
            .then((response) => {
                return response.data;
            }).catch((error) => {
                return error.response.data;
            });
    }

    // POST login info and receive/store jwt token
    async login(username, password) {
        const response = await axios
            .post(API_URL + 'login', { username, password });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    // Delete jwt token
    logout() {
        localStorage.removeItem('user');
    }

    // Retrieve user info from local storage
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();