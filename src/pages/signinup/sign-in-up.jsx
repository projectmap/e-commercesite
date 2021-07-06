import React from "react";

import SignIn from "../../components/signin/sign-in.component";

import SignUp from "../../components/sign-up/sign-up.component";
import   "./sign-in-up.scss";


const SignInUpPage=()=>{
    return(
        <div className="sign-in-up"><SignIn/>
        <SignUp/>
        </div>
    )
}

export default SignInUpPage;