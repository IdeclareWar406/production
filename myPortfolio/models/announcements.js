const mongoose = require('mongoose')

const Schema = mongoose.Schema

const announcementSchema = new Schema({
        title:{
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Portuser',
            required: true
        },
        date: {
            type:Date,
            default: Date.now()
        }
})

module.exports = mongoose.model('Announcements', announcementSchema)