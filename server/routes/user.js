const express = require('express');
const router = express.Router();
const User = require('../models/user-models');

router.post('/signup', async (req, res) => {
    let newUser = new User();

    newUser.username = req.body.username;

    newUser.email = req.body.email;
    newUser.password = req.body.password;

    newUser.save((err, User) => {
        if (err) {
            console.log(err)
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

router.get('/login', async (req, res) => {
    try {
        res.send( "hello" );
    } catch (e) {
        res.send({ message: "Error in fetching user" });
    }
}); 

module.exports = router; 