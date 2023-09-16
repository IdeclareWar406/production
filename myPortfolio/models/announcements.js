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
        }
})

module.exports = mongoose.model('Announcements', announcementSchema)