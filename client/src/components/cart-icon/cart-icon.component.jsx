import React from "react";

import { setToggleMenu } from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import "./cart-icon.styles.scss";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {ReactComponent as ShoppingCart} from "../../assets/shop-cart.svg";




const CartIcon=({setHideMenu,setCartMenu,cartItemCount})=>{
   
    return(
        <div className="cart-icon" onClick={setHideMenu}>
            <ShoppingCart className="shopping-icon"/>

            <span className="item-count">{cartItemCount}</span>
        </div>
    )
}


const mapStateToProps=(state)=>({
    cartItemCount:selectCartItemsCount(state)
})

const mapDispatchToProps=(dispatch)=>({
    setHideMenu:()=>dispatch(setToggleMenu())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);



