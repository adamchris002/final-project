const vaccineCertificateRoute = require('express').Router();
const {VaccineCertificateController} = require('../controllers');

vaccineCertificateRoute.get("/", VaccineCertificateController.getVaccineData);
vaccineCertificateRoute.put("/update/:id", VaccineCertificateController.updateVaccineData);

module.exports = vaccineCertificateRoute;