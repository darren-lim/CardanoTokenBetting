const express = require('express');
const router = express.Router();
const User = require('../models/user-models');

const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    let newUser = new User();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    await newUser.setPassword(req.body.password);
    console.log(`password: ${newUser.password}`)
    // Save user to Mongodb
    newUser.save((err) => {
        if (err) {
            return res.status(400).json({
                message: "Failed to add user",
            });
        } else {
            return res.status(201).json({
                message: "User added sucessfully",
            });
        }
    });
}); 

router.post('/login', async (req, res) => {
    User.findOne({ username : req.body.username }, async (err, user) => {
        // Check if user exists
        if (user === null) {
            return res.status(400).json({
                message: "User not found"
            });
        // If user exists, check if password is correct
        } else {
            if (!await user.passwordIsValid(req.body.password)) {
                return res.status(400).json({
                    message: "Incorrect password",
                });
            }

            var token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {expiresIn: 86400});

            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                accessToken: token,
            })
        }
    });
}); 

module.exports = router;  