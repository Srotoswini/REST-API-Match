require ('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express()

const port = process.env.port || 5001

app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json({extended:false}))

const matchroute = require('./routes/matches')
app.use('/matches', matchroute)

mongoose.connect('mongodb://localhost/matches', {useNewUrlParser: true})
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database!"))

app.listen(port, (err) => {

    if(err) throw err
    console.log("Server is listening to port " + port)

})