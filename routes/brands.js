var express = require('express');
var router = express.Router();
var brandController = require('../controller/brand.controller')

/* GET brands listing. */
router.get('/', async (req, res) => {
  try {
    const brands = await brandController.getBrands()
    res.status(200).json(brands)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params
  const brand = await brandController.findBrand(id)
  res.status(200).json(brand)
});

router.post('/', async (req, res) => {
  const data = req.body 
  try {
      const brand = await brandController.addBrand(data)
      res.status(200).json(brand)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

module.exports = router;
