const mongoose = require('mongoose')

const Schema = mongoose.Schema

const propertySchema= new Schema({
    cit: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    streetAddress:{
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    ref: {
        type: Schema.Types.ObjectId,
        ref: 'Zone',
        required: true
    },
    img: {
        type:Array,
        required: true
    }
})

module.exports = mongoose.model('Property', propertySchema)