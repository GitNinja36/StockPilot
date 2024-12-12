const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const UserModel = require("../model/UsersModel");


const Signup = async(req, res)=>{
    try{
        const { username, email, password } = req.body;
        const user  = await UserModel.findOne({username});
        if(user){
            return res.status(409)
                .json({message : "user already exist, you can login", success: false});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userModel = new UserModel({ username, email, password: hashedPassword, });
        await userModel.save();
        return res.status(201)
            .json({
                message : "Signup successfull", 
                success: true
            });
    } catch(err){
        return res.status(500)
            .json({
                message : "Internal Server Error", 
                success: false
            });
    }
}

const Login = async(req, res)=>{
    try{
        const { email, password } = req.body;
        const user  = await UserModel.findOne({email});
        const errorMsg = "Authentication failed , Email or password is wrong";
        if(!user){
            return res.status(403)
                .json({message : errorMsg, success: false});
        }
        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if(!isPasswordEqual){
            return res.status(403)
                .json({message : errorMsg, success: false});
        }
        const jwtToken =  jwt.sign(
            { email: user.email, _id : user._id },
            process.env.JWT_SECRET,
            {expiresIn : '24h'}
            )
        return res.status(200)
            .json({
                message : "Login successfull", 
                success: true,
                jwtToken,
                email,
                name: user.username
            });
    } catch(err){
        return res.status(500)
            .json({
                message : "Internal Server Error", 
                success: false
            });
    }
}

module.exports ={
    Signup,
    Login
}