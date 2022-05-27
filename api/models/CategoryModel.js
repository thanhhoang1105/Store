const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name for your category']
    },
    slug: String,
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Category', categorySchema)
