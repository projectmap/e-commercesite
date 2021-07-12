import React from "react";

import { setToggleMenu } from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import "./cart-icon.styles.scss";

import {ReactComponent as ShoppingCart} from "../../assets/shop-cart.svg";




const CartIcon=({setHideMenu})=>{
    return(
        <div className="cart-icon" onClick={setHideMenu}>
            <ShoppingCart className="shopping-icon"/>

            <span className="item-count">0</span>
        </div>
    )
}


const mapDispatchToProps=(dispatch)=>({
    setHideMenu:()=>dispatch(setToggleMenu())
})

export default connect(null,mapDispatchToProps)(CartIcon);



