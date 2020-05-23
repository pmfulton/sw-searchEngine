const express = require('express')
const hbs = require('hbs')
const path = require('path')


const app = new express()
const port = process.env.PORT || 3000
const partialsPath = path.join(__dirname, '/views/partials')
const viewsPath = path.join(__dirname, '/views')

app.set('views', viewsPath)
app.set('views engine', 'hbs')

hbs.registerPartials(partialsPath)

app.use(express.static(path.join(__dirname, './public')))


app.get('/', (req, res) => {
    res.render('index.hbs', {

    })
})

app.get('/planets', (req, res) => {
    res.render('planets.hbs')
})

app.get('/people', (req, res) => {
    res.render('people.hbs')
})

app.get('/about', (req, res) => {

})



app.listen(port, () => {
    console.log(`App running on port ${port}`)
})