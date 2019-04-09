const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {

    async index(req, res) {
        // or find()
        const {
            page = 1
        } = req.query
        const products = await Product.paginate({}, {
            page: page,
            limit: 10
        });

        if (products.length === 0) {
            return res.send('Não possui nenhum produto cadastrado')
        } else {
            return res.status(process.env.STATUS_CODE_SUCESS).json(products)
        }
    },

    async store(req, res) {
        const product = await Product.create(req.body)
        return res.status(process.env.STATUS_CODE_CREATE).json(product)
    },

    async findById(req, res) {
        const product = await Product.findById(req.params.id)
        return res.status(process.env.STATUS_CODE_SUCESS).json(product)
    },

    async update(req, res) {
        const productUpdate = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return res.json(productUpdate)
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id)
        res.send()
    }

};