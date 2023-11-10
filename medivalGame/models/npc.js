const mongoose = require('mongoose')

const Schema = mongoose.Schema


const npcSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    inventory: {
        type: Array,
        default: []
    },
    isRequired: {
        type: Boolean,
        default: false
    }
})