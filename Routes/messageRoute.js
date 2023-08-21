const { createMessage, getMessages } = require('../Controllers/messageControlls');

const route = require('express').Router();


route.post('/', createMessage);
route.get('/:chatID', getMessages);


module.exports = route