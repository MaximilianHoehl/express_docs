//If you need a middleware with options, you can just export
//a function returning a funcation passing the options-object

module.exports = function(options){
    return function (req, res, next){
        //dosth with options
        next()
    }
}

//in main.js
var mw = require('./externalMiddleware')

options = {
    some: 'options'
}

app.use(mw(options))