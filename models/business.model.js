const mongoose = require('mongoose')
const { Point } = require('mongoose').Schema.Types;

const businessSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    logo: {
        type: String,
        default: null,
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
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    geoCoordinates: {
        type: Point,
    },
    gstin: {
        type: String,
        default: ''
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    type: {
        type: String,
        enum: ['retailer', 'distributor'],
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;