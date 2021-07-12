import React from "react";
import Button from "@material-ui/core/Button";
import "./cart-dropdown.styles.scss";





const CartDropdown=()=>{
    return(
        <div className="cart-dropdown">cart dropdown

<div className="cart-items"></div>
<Button variant="contained" color="primary">Checkout</Button>
        </div>
    )
}

export default CartDropdown;