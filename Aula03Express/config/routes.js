const express = require('express')
const routes = express.Router()

let db = [{ '1': { nome: 'Alan', idade: '30' } }]

//1 - get
routes.get("/", (req, res) => {
    return res.json(db)
})


routes.post("/add", (req, res) => {
    const body = req.body
    if (!body)
        return res.status(400).end
    db.push(body)
    return res.json(body)
})

//2 - post 

//3 - delete

module.exports = routes