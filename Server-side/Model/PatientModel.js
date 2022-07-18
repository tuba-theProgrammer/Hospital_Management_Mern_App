const mongoose= require("mongoose")

var PatientSchema= new mongoose.Schema({
    patId:{
        type:Number,
        required:true
    },
    name:{
     type:String,
     required:true
    },
    disease:{
        type:String,
        required:true
       },
    age:{
        type:Number,
        required:true
       },
    
})



module.exports=   mongoose.model('Patients',PatientSchema)
