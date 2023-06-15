const mongoose = require("mongoose");
require('dotenv').config()
const URI = process.env.URI;

mongoose.connect(URI).then(() => {
    console.log("Connected to DB successfully");
}).catch(() => {
    console.log("Couldn't connect to DB");
})