var express = requrie('express')
var app = express()

//String
app.get('/about', function (req, res) {
    res.send('about')
})

app.get('/random.text', function (req, res) {
    res.send('random.text')
})

//string patterns
app.get('/ab?cd', function (req, res) { //? -> char is optional: acd XOR abcd
    res.send('ab?cd')
})

app.get('/ab+cd', function (req, res) { //+ -> one or more of that char: abcd XOR abbcd XOR abbbcd...
    res.send('ab+cd')
})

app.get('/ab*cd', function (req, res) { //* -> optional placeholder: abcd XOR abWcd XOR abRANDOMcd 
    res.send('ab*cd')
})

app.get('/ab(cd)?e', function (req, res) { // () -> apply to multiple chars. In this case: abe XOR abcde
    res.send('ab(cd)?e')
})

//Regex
app.get(/a/, function (req, res) {  // anything with an a in it
    res.send('/a/')
})

app.get(/.*fly$/, function (req, res) { // anything that ends with "fly" (?)
    res.send('/.*fly$/')
})