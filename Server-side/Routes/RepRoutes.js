const express= require('express')
const app= express()

const RepConntroller = require('../Controllers/receptionistController')
app.get('/Login',RepRoute.RepLogin)
app.post('/SignUp',RepRoute.RepLogin)

module.exports= {RepConntroller}
