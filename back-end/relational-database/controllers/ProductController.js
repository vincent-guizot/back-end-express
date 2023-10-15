const { product, company, productIngredient, ingredient } = require('../models')

class ProductController {
    static async getProducts(req, res) {
        try {
            let products = await product.findAll({
                include: [company]
            })

            res.render('product/index.ejs', { products })
        } catch (err) {
            res.json(err)
        }
    }

    static createPage(req, res) {

    }

    static async create(req, res) {
        try {
            const { name, price, stock, type, image, companyId } = req.body

            let result = await product.create({
                name, price, stock, type, image, companyId
            })

            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }

    static editPage(req, res) {

    }

    static async edit(req, res) {
        try {
            const id = +req.params.id
            const { name, price, stock, type, image, companyId } = req.body

            let result = await product.update({
                name, price, stock, type, image, companyId
            }, {
                where: { id }
            })

            result[0] === 1 ?
                res.json({
                    message: `Id ${id} has been updated`
                }) :
                res.json({
                    message: `Id ${id} not updated`
                })
        } catch (err) {
            res.json(err)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id

            let result = await product.destroy({
                where: { id }
            })

            result === 1 ?
                res.json({
                    message: `Id ${id} deleted`
                }) :
                res.json({
                    message: `Id ${id} not deleted`
                })
        } catch (err) {
            res.json(err)
        }
    }

    static async getProductIngredients(req, res) {
        try {
            const id = +req.params.id

            let result = await productIngredient.findAll({
                where: {
                    productId: id
                },
                include: [product, ingredient]
            })

            let resultPI = {}
            let ingredients = []

            if (result.length === 0) {
                result = await product.findByPk(id)
                resultPI = {
                    ...result.dataValues,
                    ingredients
                }
            } else {
                ingredients = result.map(el => {
                    return el.ingredient.dataValues
                })
                resultPI = {
                    ...result[0].product.dataValues,
                    ingredients
                }
            }

            // console.log(resultPI)
            // res.json(resultPI)
            res.render('product/infoProduct.ejs', { PI: resultPI })
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = ProductController