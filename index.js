const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))


app.get('/', (req,res) =>{
    res.render('home')
})

app.get('/contribute', (req,res) =>{
    res.render('contribute')
})

app.get('/login', (req,res) =>{
    res.render('login')
})

app.get('')


app.listen(8080, () =>{console.log("PORT 8080")})