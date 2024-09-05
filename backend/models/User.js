const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

// User Schema (logged in through manual login/signup.)
const UserSchema = new mongoose.Schema({
    _id: {
        required:true,
        unique:true
    },
    name: {
        type: String,
        required:true,
    },
    password:{ 
        required:true,
        type : String,
        unique:true,
        trim:true,
        validate(value) {
            if(value.length()<8) {
                throw new error('Password must be greater than 8')
            }
            if(value.toLowerCase.includes('password')){
                throw new error ('Password shall not be password')
            } 
        }
    },
    email: {
        required:true,
        type:String,

        trim:true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new error('Email is invalid')
            }
        }
    }
},{timestamps:true})




const User = mongoose.model('User',UserSchema)
module.exports = User