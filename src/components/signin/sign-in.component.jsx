import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import FormInput from "../forminput/forminput.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [formdata, setForm] = useState({
    email: "",
    password: "",
  });

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

  const handleSubmit = () => {
    console.log(formdata);
    alert("Your form have been submited.");
  };


  const handleSignInWithGoogle=()=>{
    alert("Your are signing with google.");
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
          Submit
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
    </div>
  );
};

export default SignIn;
