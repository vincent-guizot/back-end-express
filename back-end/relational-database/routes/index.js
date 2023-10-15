const express = require('express');
const route = express.Router()

route.get('/', (req, res) => {
    // res.json({
    // message: "Companies and Products"
    // })
    res.render('index.ejs')
})

const companyRoutes = require('./company')
const productRoutes = require('./product')
const profileRoutes = require('./profile')
const ingredientRoutes = require('./ingredient')
const productIngredientRoutes = require('./productIngredient')

route.use('/companies', companyRoutes)
route.use('/products', productRoutes)
route.use('/profiles', profileRoutes)
route.use('/ingredients', ingredientRoutes)
route.use('/productIngredients', productIngredientRoutes)

module.exports = route