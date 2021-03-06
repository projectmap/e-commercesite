import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [registerData, setRegisterData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChangeRegister = (event) => {
    const { name, value } = event.target;

    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    console.log(registerData);
    const { email, displayName, password, confirmpassword } = registerData;
    if (password !== confirmpassword) {
      alert("Sorry! password mismatch.");
      return;
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument(user, { displayName });
        setRegisterData({
          displayName: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
        alert("Congratulations you have been registered.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="form-layout-outer layout-outer-signup">
      <h3>Don't have account!!Sign Up Here..</h3>
      <form className="form-layout">
        <TextField
          className="text-field"
          label="Name"
          onChange={handleChangeRegister}
          name="displayName"
          value={registerData.displayName}
          type="text"
          color="primary"
        />
        <br />
        <TextField
          className="text-field"
          label="E-mail"
          onChange={handleChangeRegister}
          name="email"
          value={registerData.email}
          type="text"
          color="primary"
        />
        <br />
        <TextField
          className="text-field"
          label="Password"
          onChange={handleChangeRegister}
          name="password"
          value={registerData.password}
          type="password"
          color="primary"
        />
        <br />
        <TextField
          className="text-field"
          label="Confirm Password"
          onChange={handleChangeRegister}
          name="confirmpassword"
          value={registerData.confirmpassword}
          type="password"
          color="primary"
        />
        <br />
        <Button
          className="custom-button"
          onClick={handleRegister}
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
