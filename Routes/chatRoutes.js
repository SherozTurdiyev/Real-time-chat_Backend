const { createChat, findChat, findUserChats } = require('../Controllers/chatControlls');

const route = require('express').Router();

route.post('/createChat' ,  createChat);
route.get('/findChat/:userID' , findUserChats);
route.get('/find/:firstId/:secondId' , findChat);


module.exports = route