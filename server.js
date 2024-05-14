import express from 'express'
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.set('port', process.env.PORT || 8009)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})

app.get('/', (req, res) => {
    res.render('index')
})