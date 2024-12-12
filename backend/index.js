require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

// const session = require("express-session");
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');

const { OrdersModel } = require('./model/OrdersModel');
// const passport = require('passport');
// const LocalStrategy = require("passport-local");
const UsersModel = require('./model/UsersModel');

const userRouter = require('./routes/user');

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const app = express();


app.use(cors());
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/auth", userRouter);

// const sessionOption = {
//     secret:"yourSecretKey",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         httpOnly :true,
//         secure: false, 
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };
// app.use(session(sessionOption));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser();
// passport.deserializeUser();


app.get('/checkAuth', (req, res) => {
    console.log("Session ID:", req.session.id);
    console.log("User :", req.user);
    res.json({ "authenticated" : req.isAuthenticated(), "user ": req.user });
});

const isAuthenticated = (req, res, next) => {
    console.log("Session Id:", req.session.id);
    console.log("Session Cookie:", req.cookies);
    console.log("User:", req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    console.log('User is not authenticated');
    res.redirect('/login');
};

app.get('/allHoldings', async(req, res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);

});

app.get('/allPositions', async(req, res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
    
});

app.post('/newOrder', async(req, res)=>{
    console.log(req.body); 
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });
    console.log("New Order Data (before saving):", newOrder);
    await newOrder.save();
    res.send("order saved");
});

app.listen(PORT, ()=>{
    console.log(`backend is working at port ${PORT}`);
    mongoose.connect(MONGO_URL);
    console.log("Database Connected!!");
})