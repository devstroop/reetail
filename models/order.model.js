const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true,
    },
    type: {
        type: String,
        enum: ['purchase', 'sale'],
        required: true,
    },
    status: {
        type: String,
        enum: [
            'pending',
            'accepted',
            'rejected',
            'on the way',
            'delivered',
            'self pickup',
            'refunded',
            'cancelled',
            'completed',
            'returned',
        ],
        required: true,
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
    master: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Master',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
