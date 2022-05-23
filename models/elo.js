const mongoose = require('mongoose');

const eloSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    federation: {
        type: String
    },
    elo: {
        type: Number,
        required: true,
        min: 0
    }
})

const Elo = mongoose.model('Elo', eloSchema);

module.exports = Elo;