const { randomBytes } = require('crypto')
const Brand = require('../models/brands.model')
const uploadImage  = require('../config/uploadImage')

const getBrands = async () => {
    const brands = await Brand.find()
    return brands;
}

const findBrand = async (id) => {
    const brand = await Brand.findById(id)
    return brand;
}

const addBrand = async (data) => {
    const uploadedImagePath = await uploadImage(data.logoPath);
    const brand = await Brand.create({
        ...data,
        imageName: uploadedImagePath,
    });

    return brand;
}


module.exports = {
    getBrands,
    addBrand,
    findBrand
};
