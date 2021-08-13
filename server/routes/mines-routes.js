const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { response } = require('express');

const verify = require('../middleware/verifyJWT');


router.post('/start', async (req, res) => {
    // req.body.accessToken 
    // req.body.betAmount
    // req.body.burntPattiesAmount
    verify.verifyToken(res.userToken, userID);
}); 

module.exports = router;  