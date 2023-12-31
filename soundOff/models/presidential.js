const mongoose = require('mongoose')

const Schema = mongoose.Schema

const presidentialSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    hasHeldOffice : {
        type: Boolean,
        default: false
    },
    majorIssues: {
        type: Array,
        default: []
    },
    summary: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('President', presidentialSchema)