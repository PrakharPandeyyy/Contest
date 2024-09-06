const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

// User Schema (logged in through manual login/signup.)
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    password:{ 
        required:true,
        type : String,
        trim:true,
        validate(value) {
            if(value.length<8) {
                throw new error('Password must be greater than 8')
            }
        }
    },
    email: {
        required:true,
        unique:true,
        type:String,
        trim:true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new error('Email is invalid')
            }
        }
    }
},{timestamps:true})

UserSchema.pre('save',async function(next){
    const user= this ;
    user.password = await bcrypt.hash(user.password,8)
    next();
})

// UserSchema.statics.findByCredentials = async (email,password)=>{
//     const user = await User.findOne(email);
//     if(!user)
// }



const User = mongoose.model('User',UserSchema)
module.exports = User