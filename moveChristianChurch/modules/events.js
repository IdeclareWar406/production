const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    editing: {
        type: Boolean,
        default: false,
        
    },
    dateRemoved: {
        type:Date,
        required:true
    }
})



module.exports = mongoose.model(`Event`, eventsSchema)