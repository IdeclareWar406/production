const mongoose = require('mongoose')

const Schema = mongoose.Schema

const progressSchema = new Schema({
    update: {
        type: String,
        required: true
    },
    body: {
        type: String,
        default: 'no new updates'

    },
    percentage: {
        type: Number,
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Portuser',
        required: true
    }
})


module.exports = mongoose.model('Progress', progressSchema)
