var express = require('express')
var app = express()

//GET method route
app.get('/', (req, res) => {
    res.send('received')
})

//POST method
app.post('/', (req, res) => {
    res.send('received POST')
})

//all
app.all('/secret', (req, res, next) => {
    console.log('Access secret')
    next() //pass control to next handler ?
})