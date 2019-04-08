const express = require('express')
const router = express.Router()
const ProductController = require('./controller/ProductController')

router.get('/products', ProductController.index)

module.exports = router;


