const express = require('express')
const path = require('path')
const ejs = require('ejs')
const ejsMate = require('ejs-mate')
const app = express()





app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/contact', (req, res) =>{
    res.render('pages/contact')
})

app.get('/about', (req, res) =>{
    res.render('pages/about')
})

app.get('/board', (req, res) =>{
    res.render('pages/board')
})

app.get('/careers', (req, res) =>{
    res.render('pages/careers')
})

app.get('/digital-banking', (req, res) =>{
    res.render('pages/digital')
})

app.get('/security', (req, res) =>{
    res.render('pages/security')
})

app.get('/forensic-accounting', (req, res) =>{
    res.render('pages/account')
})

app.get('/ethical-hacking', (req, res) =>{
    res.render('pages/hacking')
})

app.get('/cloud', (req, res) =>{
    res.render('pages/cloud')
})

app.get('/digital2', (req, res) =>{
    res.render('pages/digital2')
})

app.get('/lending', (req, res) =>{
    res.render('pages/lending')
})

app.get('/online-payment', (req, res) =>{
    res.render('pages/payment')
})

app.get('/insutech', (req, res) =>{
    res.render('pages/insutech')
})

app.get('/investment', (req, res) =>{
    res.render('pages/investment')
})

app.get('/personal-finance', (req, res) =>{
    res.render('pages/finance')
})

app.get('/ai', (req, res) =>{
    res.render('pages/ai')
})

app.get('/business', (req, res) =>{
    res.render('pages/business')
})

app.get('/gcr', (req, res) =>{
    res.render('pages/gcr')
})

app.get('/crypto', (req, res) =>{
    res.render('pages/crypto')
})

app.get('/developer', (req, res) =>{
    res.render('pages/developer')
})

app.get('/why', (req, res) =>{
    res.render('pages/why')
})

app.get('/getting-started', (req, res) =>{
    res.render('pages/getting-started')
})

app.get('/emr', (req, res) =>{
    res.render('pages/emr')
})

app.get('/book', (req, res) =>{
    res.render('pages/book')
})

app.listen(1000, () => {
    console.log("LISTENING ON PORT 1000");
})