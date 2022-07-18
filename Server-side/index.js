const express = require("express")
const app=express()
const path = require('path')
const cors = require("cors");
app.use(cors());
var mongoose = require('mongoose')
var bodyParser= require('body-parser')
const RecepRoute = require('./Routes/RepRoutes')
app.use('/api',RecepRoute)
const mongoDb='mongodb://localhost:27017/Hospital-Management-db'
mongoose.connect(mongoDb, /*We place this to remove warning*/{ useNewUrlParser:
  true, useUnifiedTopology: true }).then(()=>{
  console.log("Connected to MongoDB database")
  }).catch((e)=>{console.log(e.message)})


app.listen(3400,()=>{
    console.log('hello mai ab phir ap hi ko sun rha hn')
  })
