import React from "react";

import {connect} from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectCartTotalPrice } from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";




const CheckoutPage=({cartItems,totalPrice})=>{
    return(
        <div className="checkout-page">
           <div className="checkout-header">
               <span className="header-block">Product</span>
               <span className="header-block">Description</span>
               <span className="header-block">Quantity</span>
               <span className="header-block">Price</span>
               <span className="header-block">Remove</span>
               
           </div>
{
    cartItems.map(item=>{
        return(
            <div>
               <CheckoutItem key={cartItems.id} cartItem={item}/>
            </div>
        )
    })
}
    <span className="total">Total:${totalPrice}</span>
        </div>
    )
}


const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state),
    totalPrice:selectCartTotalPrice(state)
})

export default connect(mapStateToProps)(CheckoutPage);