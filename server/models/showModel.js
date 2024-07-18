const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    theatre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theatre',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    ticketPrice:{
        type: Number,
        required: true
    },
    totalSeats: {
        type: Number,
        required: true
    },
    bookedSeats: {
        type: Array,
        default: []
    }
});


const Show = mongoose.model('Show', showSchema);
module.exports = Show;