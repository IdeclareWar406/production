const mongoose = require('mongoose')

const Schema = mongoose.Schema

const volunteerSchema = new Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    position: {
        type: Schema.Types.ObjectId,
        ref: 'Serving'
    },
    email: {
        type: String,
        required:true
    },
    phone: {
        type: String,
        required: true
    },
    editing: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Volunteer', volunteerSchema)