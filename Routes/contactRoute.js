const { createContact } = require('../Controllers/contactControlls');

const route = require('express').Router();

route.post('/', createContact)


module.exports = route