import React, { useEffect, useState } from "react";

import { auth } from "../../firebase/firebase.utils";


import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { Link } from "react-router-dom";

import {connect} from "react-redux";

import {ReactComponent as ShoppingCart} from "../../assets/shop-cart.svg";


import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/crownlogo.svg";
import "./header.styles.scss";
import ImgMediaCard from "../signout-menu/signout.menu";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser,setToggleMenu,dropDownStatus,toggle }) => {

  
  //console.log('current user photo', currentUser.multiFactor?.photoURL)
console.log("cart reducer",dropDownStatus,toggle,currentUser)
  const [status, setStatus] = useState("hide");
  const [cardHide1, setCardHide1] = useState("arrow-signout");
  const [cardHide2, setCardHide2] = useState("arrow-signout-hide");
  const [cartMenuStatus, setCartMenu] = useState({
    status:false,
    cartItems:[]
  });

  const handleSignOut = () => {
    setStatus("hide");
    setCardHide2("arrow-signout-hide");
    setCardHide1("arrow-signout")
    auth.signOut();
    console.log("signed out bro");
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
              <br /> {currentUser.displayName.charAt(0).toUpperCase() + currentUser.displayName.slice(1)}
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
        <CartIcon  />

        {/* <div className="cart-icon" onClick={()=>{setCartMenu((prev)=>({
...prev,
status:!prev.status
        }))}}>
            <ShoppingCart className="shopping-icon"/>

            <span className="item-count">0</span>
        </div> */}
      </div>
      {dropDownStatus?<CartDropdown/>:null}


{/* 
      <div className={cartMenu} onClick={()=>{setCartMenu("hide")}}>
      
      </div> */}
    </div>
  );
};



const mapStateToProps=(state)=>({
  currentUser:selectCurrentUser(state),
   dropDownStatus:state.cart.toggleState
})

export default connect(mapStateToProps,null)(Header);
