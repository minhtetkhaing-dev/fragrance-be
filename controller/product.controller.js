const { randomBytes } = require('crypto')
const Product = require('../models/products.model')
const uploadImage  = require('../config/uploadImage')

const getProducts = async () => {
    const products = await Product.find()
    return products;
}

const findProduct = async (id) => {
    const product = await Product.findById(id)
    return product;
}

const addProduct = async (data) => {
    const uploadedImagePath = await uploadImage(data.imagePath);
    const product = await Product.create({
        ...data,
        imageName: uploadedImagePath,
    })
    return product;
}

module.exports = {
    getProducts,
    addProduct,
    findProduct
};
