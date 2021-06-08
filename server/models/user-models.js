const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define User Model
const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})
