import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AlertSuccess from "../alert/alert.success";
import {auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../forminput/forminput.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [formdata, setForm] = useState({
    email: "",
    password: "",
  });
  const [openAlert, setOpen] = useState(false);
  //let openAlert="false";

  const handleChange = (event) => {
    const field = event.target;
    let name = field.name;
    console.log(name);
    let value = field.value;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async() => {
    console.log(formdata);
    const {email,password}=formdata; 
   try{ 
     await auth.signInWithEmailAndPassword(email,password);
     setForm({
       email:"",
       password:""
     })
     setOpen(true);
     setTimeout(setOpen(false), 2000);
// openAlert="true"; 
    //alert("You are logged in.");

   }catch(error){
console.log(error);
   }
   
   
  };


  const handleSignInWithGoogle=()=>{
    signInWithGoogle();
   
  }

  return (
    <div className="form-layout-outer">
      <h3>Sign In Here!</h3>
      <form className="form-layout" noValidate autoComplete="off">
        <TextField
          className="text-field"
          name="email"
          value={formdata.email}
          id="standard-secondary"
          label="E-mail"
          color="primary"
          onChange={handleChange}
        />
        <br />
        <TextField
          className="text-field"
          name="password"
          value={formdata.password}
          id="standard-secondary"
          label="Password"
          color="primary"
          type="password"
          onChange={handleChange}
        />
        <br />
        <div className="button-container">
        <Button
          className="custom-button"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
         Sign In
        </Button>
        <Button
          className="custom-button"
          onClick={handleSignInWithGoogle}
          variant="contained"
          color="secondary"
        >
          Sign In with Google
        </Button>
        
        </div>
      </form>
      <AlertSuccess openAlertBar={openAlert} openBar={setOpen}/>
    </div>
  );
};

export default SignIn;
