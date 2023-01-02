const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true,
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    method: {
        type: String,
        enum: ['cash', 'card', 'online', 'other'],
        required: true,
    },
    reference: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        enum: ['paid', 'received'],
        required: true,
    },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
