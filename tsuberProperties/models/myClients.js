const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    propertyDetail:{
        type:String,
        default: 'I am seeking a home and did not fill this out. Please call me or send an email'
    },
    activity: {
        type: String,
        default: 'Begining search'
    },
    editing: {
        type: Boolean,
        default: false,
    },
    deleteCheck: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Myclient', clientSchema)