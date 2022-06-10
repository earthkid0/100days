const express = require('express')//express route
const path = require('path')//path route
const { v4: uuid } = require('uuid')//uuid를 사용해 랜덤 id 생성
const methodOverride = require('method-override')//method 정의

const app = express()//express 실행

app.set('view engine', 'ejs')//ejs 사용 
app.set('views', path.join(__dirname, 'views'))//다른 폴더에서 서버 실행

app.use(express.urlencoded({ extended: true }))//post 요청의 json undefind 일때 
app.use(express.json())//외부에서 json 입력 ex)postman
app.use(methodOverride('_method'))//ex)?_method=PATCH


let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

//index
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

//new comments
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})
app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');//redirect 사용시 post받아서 바로 index로 이동
})

//detail comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;//req의 매개변수중 id 분리
    const comment = comments.find(c => c.id === id);//comments에서 요청된 id 와 같은 id를 찾아 요청
    res.render('comments/show', { comment });
})

//comments update
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const updateComment = comments.find(c => c.id === id);
    res.render('comments/edit', { updateComment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    const newCommentText = req.body.comment;
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
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