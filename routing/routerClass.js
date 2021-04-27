var express = requrie('express')
var router = express.Router()

/*
Router Class can be used to create endpoints AS A MODULE
*/

//in Module myRoutes.js
router.use(function timeLog(req, res, next){ //mount middleware
    console.log('calculate time') //gets calls on any request since its a middleware
    next()
})

router.get('/', (req, res) => { //mount relative index route (in reality: /myApp)
    res.send('specific to index')
})

router.get('/about', (req, res) => { //mount another relative route (in reality: /myApp/about)
    res.send('specific to /about')
})

module.exports = router //export

//in main application myApp.js
var myRoutes = require('./myRoutes')

app.use('/myApp', myRoutes)
