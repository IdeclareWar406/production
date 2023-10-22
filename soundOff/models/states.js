const mongoose = require('mongoose')

const Schema = mongoose.Schema

const statesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    totalReps: {
        type: Number,
        default: 0
    },
    totalSenate: {
        type: Number,
        default: 0
    },
    reps: {
        type: Array,
        default: []
    },
    senate: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('State', statesSchema)