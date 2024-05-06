var express = require('express');
var router = express.Router();
var noteController = require('../controller/scentNote.controller')

/* GET notes listing. */
router.get('/', async (req, res) => {
  try {
    const notes = await noteController.getNotes()
    res.status(200).send(notes)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params
  const notes = await noteController.findNote(id)
  res.status(200).json(notes)
});

router.post('/', async (req, res) => {
  const data = req.body 
  try {
      const note = await noteController.addNote(data)
      res.status(200).json(note)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

module.exports = router;
