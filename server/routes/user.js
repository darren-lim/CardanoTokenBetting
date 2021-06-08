const express = require('express');
const router = express.Router();

router.get('/login', async (req, res) => {
    try {
        res.send( "hello" );
    } catch (e) {
        res.send({ message: "Error in fetching user" });
    }
}); 

module.exports = router; 