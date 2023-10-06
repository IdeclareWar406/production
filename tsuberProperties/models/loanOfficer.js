const mongoose = require('mongoose')

const Schema = mongoose.Schema

const loanOfficerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    phone: {
        type: String,
        required: true
    },
    link: {
        type:String,
        default: 'yourWebsiteHere'
    },
    editing: {
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    imgUrl: {
        type: String,
        default: 'no url'
    }
})


module.exports = mongoose.model('Officer', loanOfficerSchema)