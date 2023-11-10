const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    editing: {
        type: Boolean,
        default: false
    },
    isGameMaster: {
        type: Boolean,
        default: false
    },
    characters: {
        type: Array,
        default: []
    }
   

})

userSchema.pre('save', function(next){
    const user = this
    if(!user.isModified('password')) return next()
    else bcrypt.hash(user.password, 10, (err, hash)=>{
        if(err) return next(err)
        user.password = hash
        next()
    })
})


userSchema.methods.checkPassword = function(passwordAttempt, callback){
    console.log('check pass fired')
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>{
        if(err){
            return callback(err)}
        return callback(null, isMatch)
    })
}

userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model('gameUser', userSchema)