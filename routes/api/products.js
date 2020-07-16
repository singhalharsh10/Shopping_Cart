const Product = require('../../db').Product
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get All Products

    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive products"
            })
        })
})



route.post('/', (req, res) => {
    // Validate the values
    console.log(req.body.price)
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }

    // Add a new product

    Product.create({
        // id will come from default
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price) //to convert fro string in JSon to integer

    }).then((product) => {
        res.status(201).send(product)

    }).catch((error) => {
        res.status(501).send({
            error: "Could not add new Product"
        })
    })

})


exports = module.exports = route