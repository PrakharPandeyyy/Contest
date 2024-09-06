const express = require('express')
const router = express()
require("../controller/auth.js")
const User = require('../models/User.js')

router.post('/auth/register',async (req,res)=>{
    const {name,email,password} = req.body;
    const user = new User({
        name,
        email,
        password
    })
    try{
        await user.save();
        res.status(201).send(user)
    }
    catch(e){
        console.log(e.message);
        
    }
    
})

router.post('/auth/login',async (req,res)=>{
  try{
    const {email,password}= req.body;
    // User.findOne({email,password==bcrypt.hash(password,8)})
    const user = await User.findByCredentials(email,password);
    res.send(user);

  }
    catch(e){
        console.log(e.message);  
    }
})

router.get('/auth/me',(req,res)=>{

});

router.get('/auth/logout',(req,res)=>{

});

router.get('/auth/logoutAll',(req,res)=>{

});


module.exports = router