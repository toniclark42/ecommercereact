const mongoose = require('mongoose');

//schema is a needed blueprint

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true 
    },
    price: {
        type: Number,
        // required: true 
    },
    quantity: {
        type: Number,
        // required: true 
    },
    productType: {
        type: String,
        // required: true 
    },
    productCategory: {
        type: String,
        // required: true 
    },
    imagePath: {
        type: String,
        // required: true 
    }
});

// model needed for blueprint
const ProductModel = mongoose.model('product', ProductSchema)

module.exports = {
    ProductModel
};