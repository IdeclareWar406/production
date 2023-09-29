const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username:{
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    
    },
    editing:{
        type: Boolean,
        default: false
    },
    isClient: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type:String,
        required: true
    }
})


userSchema.pre('save', function(next){
    const user = this
    if(!user.isModified('password')){
        return next()
    }
    else bcrypt.hash(user.password, 10, (err,hash)=>{
        if(err) {
            return next(err)
        }
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback){
    console.log('checkPass fired')
   
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch)=>{
        if(err){
            return callback(err)
        }
        return callback(null, isMatch)
    })
}

userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports= mongoose.model('Portuser', userSchema)