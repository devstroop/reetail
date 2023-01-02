const mongoose = require('mongoose');
const { Point } = require('mongoose').Schema.Types;

const masterSchema = new mongoose.Schema({
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
        default: ''
    },
    geoCoordinates: {
        type: Point,
    },
    type: {
        type: String,
        enum: ['customer', 'supplier'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Master = mongoose.model('Master', masterSchema);

module.exports = Master;
