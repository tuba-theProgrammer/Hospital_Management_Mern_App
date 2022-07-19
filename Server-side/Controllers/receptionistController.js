const ReceptionistModel = require("../Model/receptionistModel")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const Login= async (req,res)=>{
    const {Email,Pass}=req.body;
    ReceptionistModel.findOne({Email:Email},(err,user)=>{
        if(user)
        {
            bcrypt.compare(Pass,ReceptionistModel.Pass,(err,validate)=>{
                if(validate)
                {
                    const token=jwt.sign({Username:ReceptionistModel.Username},"MYSECRETKEY",{expiresIn:30*60});
                    res.json(token)
                }
                else
                {
                    res.status(401).json({
                        message: "no valid "
                    })
                }
            })
        }
    })
  }

const SignUp = async(req,res)=>{

    const {name,Email,Pass}=req.body;
    console.log("Sign Receptionist")
    await ReceptionistModel.create({name,Email,Pass},(err,User)=>
    {
        if(err)
        {
            res.status(401).send({msg:"Not Found"})
        }
        else
        res.status(200).json({msg:"Success"})
    })

  
}

module.exports = {Login,SignUp}






