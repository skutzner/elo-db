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
//    {
//        name: 'Grabowski, Pawel',
//        federation: 'POL',
//        elo: 2290
//    },
//    {
//        name: 'Wecker, Martin',
//        federation: 'GER',
//        elo: 2210
//    },
//    {
//        name: 'Seger, Ruediger',
//        federation: 'GER',
//        elo: 2300
//    },
//    {
//        name: 'Koehler, Christian Friedrich',
//        federation: 'GER',
//        elo: 2290
//    }
    {
        name: 'Dahm, Jochen',
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