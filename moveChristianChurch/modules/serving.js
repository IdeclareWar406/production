const mongoose = require('mongoose')

const Schema = mongoose.Schema

const servingSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        required: true
    },
    editing: {
        type: Boolean,
        default: false,
       
    },
    authUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Serving', servingSchema)