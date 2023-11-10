const mongoose = require('mongoose')

const Schema = mongoose.Schema

const weaponsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    minDamage: {
        type: Number,
        required: true
    },
    maxDamage: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isEquipped: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model("Weapons", weaponsSchema)