const mongoose = require('mongoose')

const Schema  = mongoose.Schema

const prayerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    request: {
        type: String,
        required: true
    },
    editing: {
        type: Boolean,
        default: false,
        required: true
    },
    displayName: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model("Prayer", prayerSchema)