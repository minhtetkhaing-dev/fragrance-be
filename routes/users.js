var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller')

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const users = await userController.getUsers()
    res.status(200).send(users)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params
  const users = await userController.findUser(id)
  res.status(200).json(users)
});

router.post('/', async (req, res) => {
  const data = req.body 
  try {
      const user = await userController.addUser(data)
      res.status(200).json(user)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

module.exports = router;
