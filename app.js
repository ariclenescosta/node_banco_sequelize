const express = require("express");
const app = express()

//criar o middleware para receber os dados do corpo da requisição.
app.use(express.json());

const db = require('./db/models');

const users = require('./controllers/users')

app.use('/', users)

app.listen("8088", () => {
    console.log("Servidor iniciado na porta 8088")
})