const { regiterUser } = require('../Controllers/userControllers');

const route = require('express').Router();

route.post('/regiter/', regiterUser)



module.exports = route