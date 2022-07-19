import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import '../LoginAndSignUp/auth.css'
import {CallToServer} from '../backendApiCalls'
import {SERVER_URL,CREATE_P_URL} from '../Sources/UrlsConstant'
function AddPatients(){
    
   const [name,setName] = useState('')
   const [id,setID] = useState('')
   const [age,setAge] = useState('')
   const [disease,setDisease] = useState('')

 

    const handleNameChange = (e) => {
        setName(e.target.value);
        };
        const handleDiseaseChange = (e) => {
          setDisease(e.target.value);
          };
          const handleAgeChange = (e) => {
            setAge(e.target.value);
            };
            const handleIDChange = (e) => {
                setID(e.target.value);
                };    
    
        
        const handleSubmit = (e) => {
         const data={
            patId:id,
            name:name,
            disease:disease,
            age:age
            
          }
          console.log(data)
        
          CallToServer(SERVER_URL,"POST",CREATE_P_URL,data).then(async (success)=>{
            const data = await success.json();
            console.log("Response Message",data.responseMsg)
         
           },(err)=>{
            console.log("error")    
            } 
           )
    
           e.preventDefault()
        };
        
    


    return(<>
 <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">ADD PATIENTS</h3>
          <div className="form-group mt-3">
            <label>Patient ID</label>
            <input
              type="text"
              id="id"
              name="id"
            
              onChange={handleIDChange}
              className="form-control mt-1"
           
            />
              </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
            
              onChange={handleNameChange}
              className="form-control mt-1"
              
            />
              </div>
          <div className="form-group mt-3">
            <label>Disease Name</label>
            <input
              type="email"
              id="disease"
              name="disease"
              className="form-control mt-1"
         
              onChange={handleDiseaseChange}
            />
            </div>
          <div className="form-group mt-3">
            <label>Age</label>
            <input
              type="text"
              id="age"
              name="age"
              onChange={handleAgeChange}
              className="form-control mt-1"
             
            />
                  </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
        
        </div>
      </form>
    </div>
    </>)
}
export default AddPatients