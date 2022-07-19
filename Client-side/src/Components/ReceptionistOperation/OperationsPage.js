import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import '../LoginAndSignUp/auth.css'
import AddPatients from "./AddPatients"
import ViewPatients from "./ViewPatients"
function RepOperations(){
  const [comp,setComponent]= useState( <div className="d-grid gap-2 mt-3">
  <button   onClick={ ()=> {
                  CallScreens(1)
                }} className="btn btn-primary">
    ADD PATIENTS
  </button>
 
  <button onClick={ ()=> {
                  CallScreens(2)
                }} className="btn btn-primary">
    VIEW PATIENTS
  </button>
</div>)



     function CallScreens(id){
        if(id==1){
        setComponent(<AddPatients/>)
        }else if(id==2){
            setComponent(<ViewPatients/>)
        }
     }

    return(<>
 <div className="Auth-form-container">
 
       {comp}
      
      </div>
    </>)
}
export default RepOperations