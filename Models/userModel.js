const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { required: true, type: String, maxlength: 30 },
    email: { type: String, required: true, unique: true, maxlength: 100 },
    password: { type: String, required: true, unique: true, minlength: 8, maxlength: 12 }
})

const userModel = mongoose.model("users", userSchema);


module.exports = userModel
