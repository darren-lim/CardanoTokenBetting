import axios from 'axios';
import AuthService from '../account/auth-services';
const API_URL = "http://localhost:5000/api/games/mines"

class MinesService {
    // POST login info and receive/store jwt token
    async checkValidBetAmount(betAmount) {

    }

    async startMinesGame(betAmount, burntPattiesAmount) {
        const user = AuthService.getCurrentUser();
        const userToken = user.userToken;
        const userID = user.ID;

        const response = await axios
            .post(API_URL + 'start', { userToken, userID, betAmount, burntPattiesAmount });
        // Invalid token
        if (response.data.tokenError) {
            console.log("Token error: ", response.data.tokenError);
        } else {
            console.log("Start Mines Games - Response: ", response.data);
        }
    }
}

export default new MinesService();