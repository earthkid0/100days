const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


let comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/tacos', (req, res) => {
    res.send('get/tacos!');
    console.log(req.params);
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`meat:${meat} qty:${qty}`);
    console.log(req.body);
})

app.listen(8000, () => {
    console.log("port: 8000");
})