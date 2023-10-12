const mongoose = require('mongoose')

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
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    license: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isRealtor: {
        type: Boolean,
        default: false
    }
})

userSchema.pre('save', function(next){
    const user = this
    if(!user.isModified('password')){return next()}
    else bcrypt.hash(user.password, 10, (err,hash)=>{
        if(err){return next(err)}
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(passowrdAttempt, callback){
    console.log('check pass fired')
    bcrypt.compare(passowrdAttempt, this.password, (err, isMatch)=>{
        if(err) return callback(err)
        return callback(null, isMatch)
    })
}

userSchema.withoutPassord = function(){
    const user = this.toObject()
    delete user.password
    return user
}




module.exports = mongoose.model('User', userSchema)