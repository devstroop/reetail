const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    images: [String],
    mrp: {
        type: Number,
        required: true,
    },
    salePrice: {
        type: Number,
        default: null,
    },
    taxSlab: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaxSlab',
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    stock: {
        type: Number,
        default: 0,
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
