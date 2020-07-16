const Product = require('../../db') Product
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get All Products

    Product.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })
})

exports = module.exports = route