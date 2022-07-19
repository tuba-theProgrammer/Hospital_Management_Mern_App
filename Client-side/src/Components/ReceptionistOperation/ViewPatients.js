import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState,useEffect } from "react"
import '../LoginAndSignUp/auth.css'
import UpdatePatients from "./updatePatients"
import {CallToServer} from '../backendApiCalls'
import {SERVER_URL,DELETE_P_URL,GET_ALL_P_URL} from '../Sources/UrlsConstant'



function ViewPatients(){
     


    const [data,setData] = useState([{patId:123,name:"default data",disease:"flu",age:12,}])

    useEffect(()=>{
        CallToServer(SERVER_URL,"GET",GET_ALL_P_URL,data).then(async (success)=>{
           setData(await success.json())
            console.log("Response Message",data)
         
           },(err)=>{
            console.log("error")    
            }) 
    },[])


    const [com,setComp] = useState( <div class="col-6">
 


        
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Disease</th>
            <th scope="col">age</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
            {data.map((itm,index)=>{
                return(<tr>
                    <th>{index+1}</th>
                    <td>{itm.patId}</td>
                    <td>{itm.name}</td>
                    <td>{itm.disease}</td>
                    <td>{itm.age}</td>
                    <td>
                         <button class="btn btn-danger me-2" onClick={()=>{
                             CallToServer(SERVER_URL,"POST",DELETE_P_URL,data).then(async (success)=>{
                                setData(await success.json())
                                 console.log("Response Message",data.ResponseMsg)
                              
                                },(err)=>{
                                 console.log("error")    
                                 }) 
                         }}>  Delete</button>
                         <button class="btn btn-warning" onClick={()=>{
                             setComp(<UpdatePatients/>)
                         }}>  Update</button>
                     </td>
                </tr>)
            })}
        </tbody>
      </table>
      </div>
      )




    

    return(<>
 <div className="Auth-form-container">
    {com}
      </div>
    </>)
}
export default ViewPatients