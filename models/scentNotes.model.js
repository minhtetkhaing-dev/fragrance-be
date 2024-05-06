const mongoose = require('mongoose')

const ScentNoteSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    color:{
        type: String,
        unique: true,
    }
})

const ScentNote = mongoose.model('scentNote', ScentNoteSchema)

module.exports = ScentNote