const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;
const session = require("express-session");
const passport = require("passport");
require("./controller/Oauth.js");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const isLoggedIn = require("./middleware/login.js");
const oauthRouter = require('./router/Oauth.js')
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

app.use(oauthRouter)

app.listen(port || 3000, () => {
  console.log("App is running on port 3000");
});
