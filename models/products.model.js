const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    imageName:{
        type: String,
        default: null
    },
    brandId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand'
    },
    noteIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'scentNote'
    }],
    similarProductIds: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
        default: null
    }
})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product