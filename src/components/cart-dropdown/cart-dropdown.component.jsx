import React from "react";
import Button from "@material-ui/core/Button";

import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { setToggleMenu } from "../../redux/cart/cart.actions";



const CartDropdown=({cartItems,history,setToggleMenu})=>{
    return(
        <div className="cart-dropdown">

<div className="cart-items">
    {
    
cartItems.length?(
    cartItems.map((item)=>{
        return(
            
            <CartItem key={item.id} item={item}/>
        )
    })
) :<span>Your cart is empty.</span>   
    }
</div>
<Button onClick={()=>{history.push("/checkout")
setToggleMenu()
}} variant="contained" color="primary">Checkout</Button>
        </div>
    )
}


const mapDispatchToProps=(dispatch)=>({
    setToggleMenu:()=>dispatch(setToggleMenu())
})


const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));