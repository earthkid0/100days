const express = require("express");

const app = express()

// app.use((req, res) => {
//     console.log("new request");
//     res.send("<h1>hello world</h1>");
// })//request, response

app.get("/", (req, res) => {
    console.log("Home")
    res.send("<h1>Home</h1>")
})

app.get("/r/:page", (req, res) => {
    const { page } = req.params
    console.log(req.params)
    res.send(`this ${page} page`)
})

app.get("/r/:page/:id", (req, res) => {
    const { page, id } = req.params
    console.log(req.params)
    res.send(`this ${page} page id:${id}`)
})

app.get("/cats", (req, res) => {
    console.log("Cats");
    res.send("meow!");
})

app.get("/dogs", (req, res) => {
    console.log("Dogs")
    res.send("woof!!");
})

app.get("/search", (req, res) => {
    const { q } = req.query
    if (!q) {
        res.send("Not Found")
    }
    res.send(`search: ${q}`)
})

// app.get("*", (req, res) => {
//     res.status(404).send("404")
// })

app.listen(3000, () => {
    console.log("port 8080")
})

