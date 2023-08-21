const { regiterUser, loginUser, findUser , getAllUsers } = require('../Controllers/userControllers');

const route = require('express').Router();

route.post('/regiter/', regiterUser);
route.post('/login/', loginUser);
route.get('/find/:userID' , findUser)
route.get('/' , getAllUsers)



module.exports = route