const jwt = require("jsonwebtoken");
const User = require('../models/user-models');


const catchError = (err, res) => {
    if (err instanceof TokenExpiredError) {
        return res.status(401).send({ message: "Token is expired" });
    }
    return res.sendStatus(401).send({ message: "Unauthorized" });
}

function verifyToken(token, userID) {
    if (!token) {
        return res.status(403).send({ message: "No token provided" });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return catchError(err, res);
        }
        userID = decoded.id;
        next();
    });
}

module.exports = { verifyToken };