import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./auth.css"
import { useFormik } from 'formik';
import {CallToServer} from '../backendApiCalls'
import {SERVER_URL,LOGIN_URL,SIGNUP_URL} from '../Sources/UrlsConstant'

export default function Auth(props) {
  const [authMode, setAuthMode] = useState("signup")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
 


  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if(!values.pass){
      errors.pass = 'Required';
    }else if(values.pass.length <7){
      errors.firstName = 'Must be greater than 7';
    }
  

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.SignUpemail) {
      errors.SignUpemail = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.SignUpemail = 'Invalid email address';
    }

    if(!values.SignUppass){
      errors.SignUppass = 'Required';
    }else if(values.SignUppass.length <7){
      errors.SignUppass = 'Must be greater than 7';
    }
  
    return errors;
  };
  



  // using formik on form
    const formikSignIn = useFormik({
     initialValues: {
       email: '',
       pass:'',
     },
     validate,
     onSubmit:values=>{
      CallToServer(SERVER_URL,"GET",LOGIN_URL,values).then(async (success)=>{
        const data = await success.json();
        console.log("Response Message",data)
     
       },(err)=>{
        console.log("error")    
        } 
       )
    
     }
    })

  



     // using formik on form
     const formikSignUp = useFormik({
      initialValues: {
        name:'',
        SignUpemail:'',
        SignUppass:''
 
      },
    validate,
      onSubmit:values=>{
        CallToServer(SERVER_URL,"POST",SIGNUP_URL,values).then(async (success)=>{
          const data = await success.json();
          console.log("Response Message",data)
       
         },(err)=>{
          console.log("error")    
          } 
         )
      }
     })
     

    

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={formikSignIn.handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={formikSignIn.handleChange}
                value={formikSignIn.values.email}
                onBlur={formikSignIn.handleBlur}
              />
              {formikSignIn.touched.email&&formikSignIn.errors.email ? <div style={{color:'red'}}>{formikSignIn.errors.email}</div> : null}
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                 id="pass"
                type="password"
                name="pass"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={formikSignIn.handleChange}
                onBlur={formikSignIn.handleBlur}
                value={formikSignIn.values.pass}
              />
              {formikSignIn.touched.pass&&formikSignIn.errors.pass ? <div style={{color:'red'}}>{formikSignIn.errors.pass}</div> : null}
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit"  className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formikSignUp.handleChange}
              onBlur={formikSignUp.handleBlur}
              value={formikSignUp.values.name}
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
            {formikSignUp.touched.name&&formikSignUp.errors.name ? <div style={{color:'red'}}>{formikSignUp.errors.name}</div> : null}
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="SignUpemail"
              name="SignUpemail"
              className="form-control mt-1"
              placeholder="Email Address"
              onBlur={formikSignUp.handleBlur}
              onChange={formikSignUp.handleChange}
              value={formikSignUp.values.SignUpemail}
            />
            {formikSignUp.touched.SignUpemail&&formikSignUp.errors.SignUpemail ? <div style={{color:'red'}}>{formikSignUp.errors.SignUpemail}</div> :null}
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="SignUppass"
              name="SignUppass"
              onChange={formikSignUp.handleChange}
              value={formikSignUp.values.SignUppass}
              onBlur={formikSignUp.handleBlur}
              className="form-control mt-1"
              placeholder="Password"
            />
            {formikSignUp.touched.SignUppass&&formikSignUp.errors.SignUppass ? <div style={{color:'red'}}>{formikSignUp.errors.SignUppass}</div>:null}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={formikSignUp.handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}