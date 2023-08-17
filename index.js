const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./Routes/userRoutes')


const app = express();
dotenv.config()

app.use(express.json());
app.use(cors());

// route middleWare

app.use('/api/users', userRoute)









mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("mongoDB connected"); })
    .catch((err) => { console.log("Error: " + err.message); });


app.listen(process.env.PORT, () => {
    console.log(`Server running port : ${process.env.PORT}`);
})
