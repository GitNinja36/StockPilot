require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");



const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const app = express();


app.listen(PORT, ()=>{
    console.log(`backend is working at port ${PORT}`);
    mongoose.connect(MONGO_URL);
    console.log("Database Connected!!");
})