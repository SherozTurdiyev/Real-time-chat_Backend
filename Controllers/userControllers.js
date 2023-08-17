const userModel = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcrypt')


const regiterUser = async (req, res) => {
    const { name, email, password } = req.body;
    // let isUserChecking = userModel.find({ email })
    // console.log(isUserChecking);
    // if (isUserChecking) return res.status(400).json('kutilmagan xatolik!')

    if (!name || !email || !password) return res.status(400).json({ status: 400, message: "Hammasi majburiy!" });
    if (validator.isEmail(email)) return res.status(400).json({ status: 400, message: "Email xato kiritilgan!" })
    if (!validator.isStrongPassword(password)) return res.status(400).json({ status: 400, message: "Parol Kamida bitta katta, kichich harfdan, belgi va raqamdan iborat bulishi kerak!" })

    res.json(req.body)
}


module.exports = { regiterUser }