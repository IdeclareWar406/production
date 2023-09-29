const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Portuser',
        required: true
    },
    editing:{
        type: Boolean,
        default: false
    },
    isComplete:{
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Project', projectSchema)