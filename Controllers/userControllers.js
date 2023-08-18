const userModel = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcrypt')
const { createToken } = require('../functions/createToken');
const { password_to_hash, password_compare } = require('../functions/generatePassword');



const regiterUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let isUserChecking = await userModel.find({ email })
        if (isUserChecking) return res.status(400).json({ status: 400, message: "Bunday foydalanuvchi mavjud!" })

        if (!name || !email || !password) return res.status(400).json({ status: 400, message: "Hammasi majburiy!" });
        if (validator.isEmail(email)) return res.status(400).json({ status: 400, message: "Email xato kiritilgan!" })
        if (!validator.isStrongPassword(password)) return res.status(400).json({ status: 400, message: "Parol Kamida bitta katta, kichich harfdan, belgi va raqamdan iborat bulishi kerak!" })

        const user = new userModel({ name, email, password })

        user.password = await password_to_hash(user.password)
        const token = createToken({ name: user.name, _id: user._id })

        const userSaved = await user.save()
        res.json({
            token: token,
            data: userSaved
        })
    } catch (error) {
        res.status(500).json({ status: 500, message: "Kutilmagan Xatolik!" })
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        let isUserChecking = await userModel.findOne({ email })
        if (!isUserChecking) return res.status(400).json({
            status: 400,
            data: [],
            message: "Bunday foydalanuvchi topilmadi!"
        })

        const isCheckingPass = await password_compare(password, isUserChecking.password)
        if (!isCheckingPass) return res.status(400).json({
            status: 400,
            data: [],
            message: "Bunday foydalanuvchi topilmadi!"
        })
        const token = createToken({ name: isUserChecking.name, _id: isUserChecking._id })
        res.status(200).json({
            status: 200,
            data: isUserChecking,
            message: true,
            token: token
        });

    } catch (error) {
        console.log("error: ", error.message);
        res.status(500).json({ status: 500, message: "Kutilmagan Xatolik!" })
    }
};

const findUser = async (req, res) => {
    try {
        const userID = req.params.userID

        res.userID
    } catch (err) {
        console.log(err);
    }
}


module.exports = { regiterUser, loginUser, findUser }