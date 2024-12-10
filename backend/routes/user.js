const express = require("express");
const router = express.Router();
const User = require("../model/UsersModel");
const passport = require("passport");

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    res.status(200).send("User registered successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user.");
  }
});

router.post(
  "/login", 
  passport.authenticate("local", {
    failureRedirect: '/login', 
  }), 
  async(req, res)=>{
    console.log("Session after login:", req.session);
    console.log("Authenticated User:", req.user); 
    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).send("Error saving session");
      }
      res.status(200).send("User logged in successfully!");
    });
});

router.get("/logout", (req, res, next)=>{
  req.logOut((err)=>{
    if(err){
      return next(); 
    }
    res.redirect("/");
  })
})


module.exports = router;
