const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                const re = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                return value.match(re);
            },
            message: 'Please enter a valid email address'
        }
    },
    phone: {
        type: String,
    },
    password: {
        required: true,
        type: String
    },
    address: {
        type: String,
        default: ''
    },
})

const User = mongoose.model('User', userSchema);
module.exports = User;