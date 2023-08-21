const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    userID: String,
    username: { type: String, minlength: 5, maxlength: 25 }
})

const contactModel = mongoose.model('contact', contactSchema);


module.exports = contactModel; 