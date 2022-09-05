const loginRoutes = require('express').Router();
const {LoginController} = require('../controllers')

loginRoutes.get('/', LoginController.verifyAccount);

module.exports = loginRoutes