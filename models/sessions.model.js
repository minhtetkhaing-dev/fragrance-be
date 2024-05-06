const mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    expiresAt: { 
        type: Date,
        required: true, 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
});

const Session = mongoose.model('session', SessionSchema)

module.exports = Session