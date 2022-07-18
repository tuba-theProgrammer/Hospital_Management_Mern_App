const ReceptionistModel = require("../Model/receptionistModel")

const Login= async (req,res)=>{
    res.send({
        responseMsg:"Login Call",  
    })
  }

const SignUp = async(req,res)=>{
    res.send({
        responseMsg:"SignUp Call",  
    })
}

module.exports = {Login,SignUp}






