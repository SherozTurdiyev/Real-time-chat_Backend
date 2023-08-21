const contactmodel = require('../Models/contactModel');
const userModel = require('../Models/userModel');

const createContact = async (req, res) => {
    try {
        const { useremail, username } = req.body
        const user = await userModel.find({ email: useremail })
        console.log(user);

    } catch (error) {
        console.log("error: ", error.message);
        res.status(500).json({ status: 500, message: "Kutilmagan Xatolik!" })
    }
}


module.exports = { createContact }