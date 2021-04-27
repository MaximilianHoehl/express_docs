var express = requrie('express')
app = express()


//define route params in path
/*
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
Name of parameters must be “word characters” ([A-Za-z0-9_])
*/
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

//hypen(-) and dot(.) can also be used
/*
Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }

Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }
*/

//Route with Regex
/*
Route path: /user/:userId(\d+)
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}
 */