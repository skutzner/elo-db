const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    fideId: {
        type: Number,
        min: 0
    },
    name: {
        type: String,
        required: true
    },
    federation: {
        type: String
    },
    sex: {
        type: String,
        enum: ['m', 'w']
    },
    title: {
        type: String,
        enum: ['GM', 'IM', 'FM', 'CM', 'WGM', 'WIM', 'WFM', 'WCM']
    },
    oTitle: {
        type: String
    },
    foa: {
        type: String
    },
    elo: {
        type: Number,
        required: true,
        min: 0
    },
    birthday: {
        type: Number,
        min: 0
    }
})

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;