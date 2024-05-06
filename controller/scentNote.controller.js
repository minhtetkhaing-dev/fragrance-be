const { randomBytes } = require('crypto')
const Note = require('../models/scentNotes.model')

const getNotes = async () => {
    const notes = await Note.find()
    return notes;
}

const findNote = async (id) => {
    const note = await Note.findById(id)
    return note;
}

const addNote = async (data) => {
    const note = await Note.create(data)
    return note;
}

module.exports = {
    getNotes,
    addNote,
    findNote
};
