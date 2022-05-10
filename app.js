const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/User')
const app = express();

mongoose.connect('mongodb://localhost:27017/login')

const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", () => {
    console.log('database connnected');
})

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
    res.render('home')
})

app.get('/register', function (req, res) {
    res.render('register')
})

app.post('/register', function (req, res) {
    let username = req.body.username
    let password = req.body.password
    let newUser = {
        username: username,
        password: password
    }
    User.create(newUser, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('New user added')
            res.json('User added')
        }
    })
})

app.get('/login', function (req, res) {
    res.render('login')
})

app.post('/login', function (req, res) {
    res.redirect('secret')
})


app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/')
})


app.listen('4000', function () {
    console.log('Server has started')
})




