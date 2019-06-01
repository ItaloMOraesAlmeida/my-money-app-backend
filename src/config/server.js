const Port = 3003

const BodyParser = require('body-parser')
const Express = require('express')

const Server = Express()

Server.use(BodyParser.urlencoded({ extended: true }))
Server.use(BodyParser.json())

Server.listen(Port, function() {
    console.log(`My Money App (Backend) - Rodando na porta ${Port}`)
})