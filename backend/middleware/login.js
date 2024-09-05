function isLoggedIn(req, res, next) {
  // req.user ? next() : res.sendStatus(401);
  if(req.user){
    // req.user = req.user._json;
    next();
  }
  else{
    res.sendStatus(401);
  }
  
}

module.exports = isLoggedIn;
