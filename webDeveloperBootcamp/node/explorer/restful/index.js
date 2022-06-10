const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

app.get('/tacos', (req, res) => {
    res.send('get/tacos!')
    console.log(req.params)
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body
    res.send(`meat:${meat} qty:${qty}`)
    console.log(req.body)
})

app.listen(8000, () => {
    console.log("port: 8000")
})