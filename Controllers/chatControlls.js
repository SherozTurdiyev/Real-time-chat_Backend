// createChat ,
// getUserChats
// findChat

const chatModel = require('../Models/chatModel');

const createChat = async (req, res) => {
    const { userFirstId, userSecondId } = req.body
    try {
        const chat = await chatModel.find({
            members: { $all: [userFirstId, userSecondId] }
        })

        if (!chat.length == 0 && !!chat) return res.status(200).json({
            status: 200,
            data: chat
        })

        const newChat = new chatModel({
            members: [userFirstId, userSecondId]
        })
        const isSavedChat = await newChat.save()

        res.status(200).json({
            status: 200,
            data: isSavedChat
        })

    } catch (error) {
        console.log("error: ", error.message);
        res.status(500).json({ status: 500, message: "Kutilmagan Xatolik!" })
    }
}


const findUserChats = async (req, res) => {
    const { userID } = req.params;
    console.log(userID);
    try {
        const chats = await chatModel.find({
            members: { $in: [userID] }
        })

        res.status(200).json({
            status: 200,
            data: chats
        })

    } catch (error) {
        console.log("error: ", error.message);
        res.status(500).json({ status: 500, message: "Kutilmagan Xatolik!" })
    }
}

const findChat = async (req, res) => {
    const { firstId, secondId } = req.params;
    try {
        const chat = await chatModel.find({
            members: { $all: [firstId, secondId] }
        })

        res.status(200).json({
            status: 200,
            data: chat
        })

    } catch (error) {
        console.log("error: ", error.message);
        res.status(500).json({ status: 500, message: "Kutilmagan Xatolik!" })
    }
}


module.exports = { createChat, findChat, findUserChats }