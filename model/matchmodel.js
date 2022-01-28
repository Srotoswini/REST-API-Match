const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    }, 
    age: {
        type: Number,
        // required: true
    },
    zodiac: {
        type: String,
        // required: true 
    },

    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('matchmodel', userSchema)