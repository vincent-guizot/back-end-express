const { productIngredient, product, ingredient } = require('../models')

class ProfileController {
    static async getPI(req, res) {
        try {
            let PIs = await productIngredient.findAll({
                include: [product, ingredient]
            })

            res.json(PIs)
        } catch (err) {
            res.json(err)
        }
    }

    static async create(req, res) {
        try {
            const { productId, ingredientId } = req.body;

            let result = await productIngredient.create({
                productId: +productId,
                ingredientId: +ingredientId
            })

            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }

}

module.exports = ProfileController