import React from "react";

import { Link } from "react-router-dom";

import {ReactComponent as Logo} from "../../assets/crownlogo.svg"
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-holder">
        <Link className="home" to="/">
         <Logo/>
        </Link>
      </div>
      <div className="option-holder">
        <div className="option">
          <Link className="options" to="/shop">
            {" "}
            SHOP
          </Link>
        </div>
        <div className="option">
          {" "}
          <Link className="options"> CONTACT</Link>
        </div>
        <div className="option">
          {" "}
          <Link to="/signin" className="options"> SIGN IN</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
