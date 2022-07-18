const express= require('express')
const app= express()

const RepConntroller = require('../Controllers/receptionistController')
app.get('/Login',RepConntroller.Login)
app.post('/SignUp',RepConntroller.SignUp)

module.exports= app