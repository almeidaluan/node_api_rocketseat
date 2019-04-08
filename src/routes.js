const express = require('express')
const router = express.Router()

//Controlladores
const ProductController = require('./controller/ProductController')


router.get('/products', ProductController.index),
    router.post('/products', ProductController.store)

module.exports = router;