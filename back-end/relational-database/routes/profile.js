const { Router } = require("express");
const profileRoute = Router();
const { ProfileController } = require("../controllers");

profileRoute.get("/", ProfileController.getProfiles);
profileRoute.post("/create", ProfileController.create);

module.exports = profileRoute;
