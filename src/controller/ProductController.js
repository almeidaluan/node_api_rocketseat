const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {

    async index(req, res) {
        const products = await Product.find();

        if (products.length === 0) {
            return res.send('Não possui nenhum produto cadastrado')
        } else {
            return res.status(process.env.STATUS_CODE_SUCESS).json(products)
        }
    },

    async create(req, res) {
        const products = await Product.create(req.body)
        return res.status(process.env.STATUS_CODE_CREATE).json(products)
    }

};