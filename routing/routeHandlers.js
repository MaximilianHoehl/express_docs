var express = requrie('express')
app = express()

//Multiple handlers can be defined on an endpoint(route)
//next() callc the next defined cb
app.get('/example/d', (req, res, next) => {
    console.log('Begin to calculate sth')
    next()
}, (req, res) => {
    res.send('Finished calculation')
})

//can also be done over an array of functions
var f0 = function(req, res, next){
    console.log('f0')
    next()
}
var f1 = function(req, res , next){
    console.log('f1')
    next()
}
var f2 = function(req, res){
    res.send('done.')
}
app.get('/example/c', [f0, f1, f2])
