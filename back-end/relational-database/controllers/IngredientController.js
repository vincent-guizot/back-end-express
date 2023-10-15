const { ingredient } = require('../models')

class ProductController {
    static async getIngredients(req, res) {
        try {
            let ingredients = await ingredient.findAll()

            res.json(ingredients)
        } catch (err) {
            res.json(err)
        }
    }

    static createPage(req, res) {

    }

    static async create(req, res) {
        try {
            const { name } = req.body

            let result = await ingredient.create({
                name
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
            const { name } = req.body

            let result = await ingredient.update({
                name
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

            let result = await ingredient.destroy({
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
}

module.exports = ProductController