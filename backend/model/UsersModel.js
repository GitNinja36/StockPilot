const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const usersSchema = new Schema({
    username: String,
    email: {
        type : String,
        required : true,
    },
    password: {
        type : String,
        required : true,
    }
});

// usersSchema.plugin(passportLocalMongoose);
const UserModel =  mongoose.model("users", usersSchema);
module.exports = UserModel;