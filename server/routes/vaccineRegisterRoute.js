const vaccineRegisterRoute = require('express').Router();
const {VaccineRegisterController} = require('../controllers');

vaccineRegisterRoute.get('/', VaccineRegisterController.getData);
vaccineRegisterRoute.post('/create', VaccineRegisterController.create);
vaccineRegisterRoute.put('/update/:id', VaccineRegisterController.update);
vaccineRegisterRoute.delete('/delete/:id', VaccineRegisterController.delete);

module.exports = vaccineRegisterRoute;