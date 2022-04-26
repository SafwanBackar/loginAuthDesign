var express = require('express')

var app = express();

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('home')
})

app.get('/register', function (req, res) {
    res.render('register')
})

app.get('/login', function (req, res) {
    res.render('login')
})

app.listen('4000', function () {
    console.log('Server has started')
})