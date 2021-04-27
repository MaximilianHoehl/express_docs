var express = require('express') //get module
var app = express()             //get instance of express class (calling constructor returns an instance of express (singleton pattern?))

app.get("/", (req, res) => {    //listenes to "/" and responds get request with defined string
    res.send('Hey there, got your request!')
})