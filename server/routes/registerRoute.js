const registerRoutes = require('express').Router()
const {RegisterController} = require('../controllers')

registerRoutes.get("/", RegisterController.checkAccount);
registerRoutes.post('/create', RegisterController.createAccount);

module.exports = registerRoutes