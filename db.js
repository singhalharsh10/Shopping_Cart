const Sequelize = require('sequelize')

const db = new Sequelize('Shoppingcart', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0, //it is defining minimum ans maximumno of connection
        max: 5,
    }
})


const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNULL: false
    }


})


const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    manufacturer: {
        type: Sequelize.STRING(25),
        allowNULL: false
    },

    price: {
        type: Sequelize.FLOAT,
        allowNULL: false,
        defaultValue: 0.0
    }

})


db.sync()
    .then(() => console.log("Database has been cretaed/sync"))
    .catch(() => console.log("errsor creating database"))

exports = module.exports = {
    User,
    Product
}