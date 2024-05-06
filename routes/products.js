var express = require('express');
var router = express.Router();
var productController = require('../controller/product.controller')

/* GET products listing. */
router.get('/', async (req, res) => {
  try {
    const products = await productController.getProducts()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params
  const product = await productController.findProduct(id)
  res.status(200).json(product)
});

router.post('/', async (req, res) => {
  const data = req.body 
  try {
      const product = await productController.addProduct(data)
      res.status(200).json(product)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

module.exports = router;
