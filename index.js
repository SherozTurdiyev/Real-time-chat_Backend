const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./Routes/userRoutes');
const chatRoutes = require('./Routes/chatRoutes');
const messageRoute = require('./Routes/messageRoute');
const contactRoute = require('./Routes/contactRoute')


const app = express();
dotenv.config()

app.use(express.json());
app.use(cors());

// route middleWare

app.use('/api/users', userRoute)
app.use('/api/chat', chatRoutes)
app.use('/api/messages', messageRoute)
app.use('/api/contact', contactRoute)









mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("mongoDB connected"); })
    .catch((err) => { console.log("Error: " + err.message); });


app.listen(process.env.PORT, () => {
    console.log(`Server running port : ${process.env.PORT}`);
})
