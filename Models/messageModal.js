const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatID: String,
    senderID: String,
    text: String
},
    {
        timestamps: true
    }
)

const messageModal = mongoose.model('message', messageSchema);

module.exports = messageModal