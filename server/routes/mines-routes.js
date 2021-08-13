const express = require('express');
const router = express.Router();
const User = require('../models/user-models');

const jwt = require('jsonwebtoken');
const { response } = require('express');


router.post('/start', async (req, res) => {
    // req.body.accessToken 
    // req.body.betAmount
    // req.body.burntPattiesAmount
    
}); 

module.exports = router;  