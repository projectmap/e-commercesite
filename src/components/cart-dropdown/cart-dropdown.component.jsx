import React from "react";
import Button from "@material-ui/core/Button";

import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";



const CartDropdown=({cartItems})=>{
    return(
        <div className="cart-dropdown">

<div className="cart-items">
    {cartItems.map((item)=>{
        return(
            <CartItem key={item.id} item={item}/>
        )
    })}
</div>
<Button variant="contained" color="primary">Checkout</Button>
        </div>
    )
}



const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);