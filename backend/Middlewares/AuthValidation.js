const Joi = require("joi");
const jwt = require('jsonwebtoken'); 

const signupValidation = (req, res, next)=>{
    const Schema = Joi.object({
        username: Joi.string().min(3).max(8).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(12).required(),
    })
    const {error} = Schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message  : "Bad request", error})
    }
    next();
}

const loginValidation = (req, res, next)=>{
    const Schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(12).required(),
    })
    const {error} = Schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message  : "Bad request", error})
    }
    next();
}


const authenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1]; // Extract token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
};


module.exports = {
    signupValidation, 
    loginValidation,
    authenticateUser
}