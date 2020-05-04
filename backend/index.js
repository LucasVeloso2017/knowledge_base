const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

/*
VOLTAR AQUI E CONSERTAR COM MONGODB
*/
require('./config/mongodb')

app.db = db
app.mongoose = mongoose

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)


app.listen(3008,()=>{
    console.log('Backend em Execução')
})