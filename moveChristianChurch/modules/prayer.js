const mongoose = require('mongoose')

const Schema  = mongoose.Schema

const prayerSchema = new Schema({
    name: {
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
    }
})


module.exports = mongoose.model("Prayer", prayerSchema)