const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    stockQuantity: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    }
    // tags
}, {timestamps: true})



module.exports = mongoose.model('Item', ItemSchema)