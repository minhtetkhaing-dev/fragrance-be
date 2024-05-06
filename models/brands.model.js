const mongoose = require('mongoose')

const BrandSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    imageName:{
        type: String,
        default: null
    },
    type: {
        type: String,
        enum: ['nieche', 'designer'],
        default: null,
    }
})

const Brand = mongoose.model('brand', BrandSchema)

module.exports = Brand