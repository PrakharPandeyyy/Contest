const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
const port = process.env.PORT || 3000;
const session = require("express-session");
const passport = require("passport");
require("./auth.js");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const isLoggedIn = require("./middleware/login.js");

// creating session

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] }),
  (req, res) => {
    console.log("hello");
  }
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
    successRedirect: "/success/redirect",
  })
);

app.get("/auth/failure", (req, res) => {
  res.send("You failed to log in");
});

app.get("success/redirect", isLoggedIn, (req, res) => {
  console.log(req.user);

  res.send("You are logged in");
});

app.listen(port || 3000, () => {
  console.log("App is running on port 3000");
});
