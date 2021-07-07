import React, { useEffect, useState } from "react";

import { auth } from "../../firebase/firebase.utils";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crownlogo.svg";
import "./header.styles.scss";
import ImgMediaCard from "../signout-menu/signout.menu";

const Header = ({ currentUser }) => {
  //console.log('current user photo', currentUser.multiFactor?.photoURL)

  const [status, setStatus] = useState("hide");
  const [cardHide1, setCardHide1] = useState("arrow-signout");
  const [cardHide2, setCardHide2] = useState("arrow-signout-hide");

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="logo-holder">
        <Link className="home" to="/">
          <Logo />
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
          {currentUser ? (
            <div className="options">
              Hello!
              <br /> {currentUser.bc.displayName}
              <span
                onClick={() => {
                  setStatus("menu-signout");
                  setCardHide2("arrow-signout");
                  setCardHide1("arrow-signout-hide");
                  console.log("clicked arrow");
                }}
                className={cardHide1}
              >
                &#8681;
              </span>
              <span
                onClick={() => {
                  setStatus("hide");
                  setCardHide1("arrow-signout");
                  setCardHide2("arrow-signout-hide");
                  console.log("clicked arrow");
                }}
                className={cardHide2}
              >
                &#8679;
              </span>
              <div className={status}>
                <ImgMediaCard
                  handle={handleSignOut}
                  currentUser={currentUser}
                />
              </div>
            </div>
          ) : (
            <Link to="/signin" className="options">
              {" "}
              SIGN IN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
