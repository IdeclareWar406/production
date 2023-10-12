const mongoose = require('mongoose')

const Schema = mongoose.Schema

const zoneSchema = new Schema({
    identifier: {
        type: String,
        required: true
    },
    listing: {
        type : Array,
        default: []
    },
    areasCovered: {
        type: Array,
        default: []
    },
    state: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Zone', zoneSchema)