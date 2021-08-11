const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


// Define User Model for Login Credentials
const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.methods.setPassword = async function(password) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
};

UserSchema.methods.passwordIsValid = async function(password) {
    return await bcrypt.compare(password, this.password);
}


module.exports = mongoose.model("user", UserSchema);
