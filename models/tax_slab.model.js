const mongoose = require('mongoose');

const taxSlabSchema = new mongoose.Schema({
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    range: {
        type: String,
        required: true,
    },
});

const TaxSlab = mongoose.model('TaxSlab', taxSlabSchema);

module.exports = TaxSlab;

//// Example
// const newTaxSlab = new TaxSlab({
//     name: 'Standard',
//     rate: 18,
//     range: '0 - INR 5,00,000',
// });