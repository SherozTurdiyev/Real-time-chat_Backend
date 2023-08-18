const { regiterUser, loginUser, findUser } = require('../Controllers/userControllers');

const route = require('express').Router();

route.post('/regiter/', regiterUser);
route.post('/login/', loginUser);
route.get('/:userID' , findUser)



module.exports = route