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
        type: [String],
        require: true,
    },
    stockQuantity: {
        type: Number,
        require: true,
    },
    image: {
        type: [String],
        require: true,
    }
    // tags
}, {
    timestamps: true,
    discriminatorKey: 'category',
    collection: 'products'
})


const WatchSchema = new Schema({
    brand: {
        type: String,
        require: true,
    },
    item_length_in_Inches: {
        type: Number,
        require: true
    },
    color: {
        type: String,
        require: true,
    },
    Model_number: {
        type: Number,
        require: true
    }
})

const Watches = ItemSchema.discriminator('Watches', WatchSchema)

module.exports = mongoose.model('Item', ItemSchema)
// module.exports = {Watches}