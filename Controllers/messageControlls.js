const messageModal = require('../Models/messageModal');


const createMessage = async (req, res) => {
    const { chatID,
        senderID,
        text } = req.body
    try {

        const newMessage = await messageModal({
            chatID,
            senderID,
            text
        })

        const isSavedMessage = await newMessage.save();
        res.status(200).json({
            status: 200,
            data: isSavedMessage
        })

    } catch (error) {
        console.log("error: ", error.message);
        res.status(500).json({ status: 500, message: "Kutilmagan Xatolik!" })
    }
}



const getMessages = async (req, res) => {
    const { chatID } = req.params
    try {
        const messages = await messageModal.find({ chatID });

        res.status(200).json({
            status: 200,
            data: messages
        })

    } catch (error) {
        console.log("error: ", error.message);
        res.status(500).json({ status: 500, message: "Kutilmagan Xatolik!" })
    }

}


module.exports = { createMessage, getMessages }