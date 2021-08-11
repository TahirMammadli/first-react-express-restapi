const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postsSchema = new Schema({
    userId: {
        type: Number,
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', postsSchema)