const express = require('express');
const app = express();
const path = require('path');
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/players', async (req, res) => {
    const players = await Player.find({})
    console.log(players)
    //res.send('Test')
    res.render('players/index', { players })
})

app.get('/players/:id', async (req, res) => {
    const { id } = req.params;
    const player = await Player.findById(id)
    console.log(player)
    //res.send('Test')
    res.render('players/show', { player })
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})