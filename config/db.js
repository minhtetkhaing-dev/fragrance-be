const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const MONGODB_URL = process.env.MONGODB_URL

const db = async()=>{
    try {
        await mongoose.connect(MONGODB_URL)
    } catch (error) {
        process.exit(1);
    }
}

module.exports = db