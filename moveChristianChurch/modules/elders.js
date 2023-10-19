const mongoose = require('mongoose')

const Schema = mongoose.Schema

const elderSchema= new Schema({
    name: {
        type: String,
        required:true
    },
    elderSince: {
        type:Date,
        default: ''
    },
    editing:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model('Elder', elderSchema)