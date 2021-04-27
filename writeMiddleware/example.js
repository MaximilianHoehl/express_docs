var express = require('express')
var app = express()

var requestTime = function(req, res, next){
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

app.get('/', (req, res) => {
    res.send('New the time is in your req object')
})

app.listen(3000)