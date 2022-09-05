const routes = require('express').Router();

const registerRoute = require('./registerRoute')
const loginRoute = require('./loginRoute')
const vaccineCategoryRoute = require('./vaccineCategoryRoute')
const vaccineCertificateRoute = require('./vaccineCertificateRoute');
const vaccineRegisterRoute = require('./vaccineRegisterRoute')

routes.use('/register', registerRoute)
routes.use('./login', loginRoute)
routes.use('./category', vaccineCategoryRoute)
routes.use('./certificate', vaccineCertificateRoute)
routes.use('./vaccine-register', vaccineRegisterRoute)


module.exports = routes