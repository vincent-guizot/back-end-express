const { Router } = require("express");
const ingredientRoute = Router();
const { IngredientController } = require("../controllers");

ingredientRoute.get("/", IngredientController.getIngredients);
ingredientRoute.get("/create", IngredientController.createPage);
ingredientRoute.post("/create", IngredientController.create);
ingredientRoute.get("/edit/:id", IngredientController.editPage)
ingredientRoute.post("/edit/:id", IngredientController.edit)
ingredientRoute.get("/remove/:id", IngredientController.delete)

module.exports = ingredientRoute;
