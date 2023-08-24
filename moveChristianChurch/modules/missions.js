const mongoose = require('mongoose')

const Schema = mongoose.Schema

const missionSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    leaders: {
        type: Array,
        default: []
    },
    editing: {
        type: Boolean,
        default: false,
        
    },
    authUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Mission', missionSchema)