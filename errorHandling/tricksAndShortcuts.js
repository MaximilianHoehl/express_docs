//If the callback in a sequence provides no data, only errors, you can simplify this code as follows:
app.get('/', [
    function(req, res, next){
        fs.writeFile('on/this/path.txt', 'data', next) //<---- next as callback. Will get error or nothing and so behaves as wanted
    }, 
    function(req, res){
        res.send('done.')
    }
])