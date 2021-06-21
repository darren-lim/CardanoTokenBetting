import axios from 'axios';

const API_URL = "http://localhost:5000/api/"

class AuthService {
    // POST new user info
    register(username, email, password) {
        return axios.post(API_URL + 'signup', { username, email, password });
    }

    // POST login info and receive/store jwt token
    login(username, password) {
        return axios
            .post(API_URL + 'login', { username, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    // Delete jwt token
    logout() {
        localStorage.removeItem('user');
    }
}

export default new AuthService();