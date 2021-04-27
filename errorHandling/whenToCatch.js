//You have to catch errors in async code invoked by express
app.get('/', (req, res, next) => {
    setTimeout(() => {
        try{
            doSth()
        }catch(err){
            next(err)
        }
    }, 100)
})

//Only with promisses you dont have to do that