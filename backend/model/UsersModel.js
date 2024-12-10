const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const usersSchema = new Schema({
    username: String,
    email: {
        type : String,
        required : true,
    }
});

usersSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", usersSchema);
module.exports = User;