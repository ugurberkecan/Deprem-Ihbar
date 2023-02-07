const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    role: String
});

const User = mongoose.model('User', userSchema);


module.exports = User;