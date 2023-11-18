const mongoose = require('mongoose')

const Schema = mongoose.Schema

const characterSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    health: {
        type: Number,
        default: 100
    },
    mana: {
        type: Number,
        default:100
    },
    stamina: {
        type: Number,
        default: 100
    },
    inventory: {
        type: Array,
        default: []
    },
    experience: {
        type: Number,
        default: 0
    },
    skills: {
        type: Array,
        default: []
    },
    playerLevel: {
        type: Number,
        default: 1
    },
    savedGame: {
        type: String,
        default: ''
    },
    attackDamage: {
        type: Number,
        default: 0
    },
    defenseRating: {
        type: Number,
        default: 0
    },
    charModel: {
        type: String,
        default: ""
    },
    charClass: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Character", characterSchema)