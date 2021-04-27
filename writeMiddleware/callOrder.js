var express = require('express')
var app = express()
/*Starting with Express 5, middleware functions that return 
a Promise will call next(value) when they reject or throw an 
error. next will be called with either the rejected value or the thrown Error.*/

//Define a middleware
var anyLogger = function(req, res, next){
    console.log('Im called at any request')
    next()
}

var someLogger = function(req, res, next){
    console.log('At index route I wont be called since the req,res-cycle already ended')
    next()
}

var failLogger = function(req, res, next){
    console.log('Ill only log at invalid routes')
    next()
}

//use a middleware 
//now the middleware gets called everytime we receive any request (even unvalid ones)
//->every time we get a request this script runs through
app.use(anyLogger)

//these ones only get called if the pattern matches
app.get('/', function(req, res){
    res.send('Received')
})

app.use(someLogger)

app.get('/test', function(req, res){
    res.send('Received at test')
})

app.use(failLogger)

app.listen(3000)