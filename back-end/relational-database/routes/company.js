const { Router } = require("express");
const companyRoute = Router();
const { CompanyController } = require("../controllers");

companyRoute.get("/", CompanyController.listCompanies);
companyRoute.get("/create", CompanyController.createPage);
companyRoute.post("/create", CompanyController.create);
companyRoute.get('/remove/:companyId', CompanyController.remove)
companyRoute.get('/edit/:id', CompanyController.editPage)
companyRoute.post('/edit/:id', CompanyController.edit)
companyRoute.get('/info/:id', CompanyController.info)

module.exports = companyRoute;
