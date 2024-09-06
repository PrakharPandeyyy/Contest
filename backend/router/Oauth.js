const express = require("express");
const router = express();
require("dotenv").config();
const passport = require("passport");
require("../controller/Oauth.js");

const isLoggedIn = require("../middleware/login.js");
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "profile",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
    successRedirect: "/success/redirect",
  })
);

router.get("/auth/failure", (req, res) => {
  res.send("You failed to log in");
});

router.get("auth/success/redirect", isLoggedIn, (req, res) => {
  console.log(req.session);
  res.send("You are logged in");
});

router.get("auth/success/logout", (req, res) => {
  req.session.destroy();
  console.log(req.session);

  res.redirect("/");
});

module.exports = router;
