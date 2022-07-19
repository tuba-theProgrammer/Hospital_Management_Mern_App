const PatienttModel = require("../Model/PatientModel")

const CreatePatient= async (req,res)=>{
  const {patId,name,disease,age}=req.body;
  console.log("Create Patient")
  console.log(req.body)
  await PatienttModel.create({patId,name,disease,age},(err,User)=>
  {
      if(err)
      {
          res.status(401).send({msg:"Not Found"})
      }
      else
      res.status(200).json({msg:"Success"})
  })
  }

const UpdatePatient = async(req,res)=>{
  const {patId,name,disease,age}=req.body
  const {id}=req.params;
  console.log(req.body)
  await PatienttModel.updateOne({_id:id},{patId:patId,disease:disease,name:name,age:age}).then(function(){
      res.status(200).json({msg:"Updated"})
  }).catch(function(err)
  {
      res.status(401).json({msg:"Not Updated"})
  });
}

const DeletePatient = async(req,res)=>{
  const {id}=req.params;
  console.log(id)

  await PatienttModel.findByIdAndDelete(id)
  const patients=await PatienttModel.find()
  res.status(200).send(
      patients
  )
}
const ViewPatient = async(req,res)=>{
  const patients =  await PatienttModel.find();
  console.log(patients)
  res.status(200).send(
      patients)
}

module.exports = {CreatePatient,UpdatePatient,DeletePatient,ViewPatient}






