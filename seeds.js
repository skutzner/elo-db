const mongoose = require('mongoose');

const Player = require('./models/player');

mongoose.connect('mongodb://localhost:27017/eloTest', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection open")
    })
    .catch(err => {
        console.log("Mongo Connection Error")
        console.log(err)
    })

const seedProducts = [
    {
        name: 'Doe, Joe',
        federation: 'GER',
        elo: 2250        
    }
]

Player.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
