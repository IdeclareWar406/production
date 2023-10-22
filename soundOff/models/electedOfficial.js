const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const electedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type:Schema.Types.ObjectId,
        ref: 'State',
        required: true
    },
    majorIssues: {
        type: String,
        required: true
    },
    ranIssues: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type:String,
        required: true
    },
    office: {
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Reps', electedSchema)