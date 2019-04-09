const express = require('express')
const router = express.Router()

//Controlladores
const ProductController = require('./controller/ProductController')


router.get('/products', ProductController.index),
    router.post('/products', ProductController.store),
    router.get('/product/:id', ProductController.findById),
    router.put('/products/:id', ProductController.update),
    router.delete('/products/:id', ProductController.destroy)

module.exports = router;