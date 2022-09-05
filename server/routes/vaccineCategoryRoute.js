const vaccineCategoryRoute = require("express").Router();
const { VaccineCategoryController } = require("../controllers");

vaccineCategoryRoute.get("/", VaccineCategoryController.getVaccine);
vaccineCategoryRoute.put("/update/:id", VaccineCategoryController.update);

module.exports = vaccineCategoryRoute;
