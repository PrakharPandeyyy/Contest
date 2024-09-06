const express = require("express");
var cors = require("cors");
var bodyParser = require('body-parser')
require("./controller/db.js");

require("dotenv").config();
const port = process.env.PORT || 3000;
const session = require("express-session");
const passport = require("passport");
require("./controller/Oauth.js");
const app = express();
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const oAuthRouter = require('./router/Oauth.js')
const userRouter = require('./router/auth.js')
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
  
app.use(userRouter);
app.use(oAuthRouter)



app.listen(port || 3000, () => {
  console.log("App is running on port 3000");
});
