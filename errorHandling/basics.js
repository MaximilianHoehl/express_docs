//Sync: You just have to throw errors, express will catch them
express = require('express')
app = express()

app.get('/', (req, res) => {

    if(!req.sth){
        throw new Error('No req.sth?!') //<----
    }else{
        res.send()
    }
})

//Async: You have to pass the error to next(err)
app.get('/index', (req, res, next) => {
    fs.readFile('/does/not/exist.txt', (err, data) => {
        if(err){
            next(err) //<----
        }else{
            res.send(data)
        }
    })
})

//Starting with Express 5, route handlers and middleware that return a Promise will call next(value) automatically when they reject or throw an error
app.get('/', async function(req, res, next) {
    var user = await getUserById(req.param.id) //<---- will call next(value) automatically if rejects; or next(err) if throws error
    res.send(user)
})