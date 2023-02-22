
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User= mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: String,
        email: String,
    }
)

module.exports = mongoose.model('User', User);