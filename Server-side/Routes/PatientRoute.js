const express= require('express')
const app= express()

const PatientConntroller = require('../Controllers/patientController')
app.post('/CreatePatient',PatientConntroller)
app.post('/UpdatePatient',PatientConntroller)
app.post('/DeletePatient',PatientConntroller)
app.get('/GetAllPatient',PatientConntroller)
module.exports= app
