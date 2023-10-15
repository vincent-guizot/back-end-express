const { Router } = require("express");
const productIngredientRoutes = Router();
const { PIController } = require("../controllers");

productIngredientRoutes.get("/", PIController.getPI);
productIngredientRoutes.post("/create", PIController.create);

module.exports = productIngredientRoutes;
