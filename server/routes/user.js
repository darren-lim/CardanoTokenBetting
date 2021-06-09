const express = require('express');
const router = express.Router();
const User = require('../models/user-models');

router.post('/signup', async (req, res) => {
    
    let newUser = new User();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.setPassword(req.body.password);
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
    // User.findOne({ email : req.body.email }, (err, username) => {
    //     if (username === null) {
    //         return res.status(400).json({
    //             message: "User not found"
    //         });
    //     } else {
    //         if (username.)
    //     }
    // });

    // try {
    //     res.send( "login" );
    // } catch (e) {
    //     res.send({ message: "Error in fetching user" });
    // }
}); 

module.exports = router; 