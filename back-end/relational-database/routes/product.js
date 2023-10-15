const { Router } = require("express");
const productRoute = Router();
const { ProductController } = require("../controllers");

productRoute.get("/", ProductController.getProducts);
productRoute.get("/create", ProductController.createPage);
productRoute.post("/create", ProductController.create);
productRoute.get("/edit/:id", ProductController.editPage)
productRoute.post("/edit/:id", ProductController.edit)
productRoute.get("/remove/:id", ProductController.delete)

productRoute.get('/:id/ingredients', ProductController.getProductIngredients)
// productRoute.get('/:id/ingredients/:ingredientId', ProductController.getIngredientsInformation)

module.exports = productRoute;
