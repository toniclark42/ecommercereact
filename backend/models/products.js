const mongoose = require('mongoose');

//schema is a needed blueprint

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String, 
    },
    price: {
        type: Number, 
    },
    quantity: {
        type: Number, 
    },
    productType: {
        type: String, 
    },
    productCategory: {
        type: String, 
    },
    imagePath: {
        type: String, 
    }
});

// model needed for blueprint
const ProductModel = mongoose.model('product', ProductSchema)

module.exports = {
    ProductModel
};