
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        email: String,
    }
)

const User = mongoose.model('User', userSchema);