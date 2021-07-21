import React from "react";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
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
            <div className="checkout-item-container">
               <CheckoutItem key={cartItems.id} cartItem={item}/>
            </div>
        )
    })
}
    <span className="total">Total:${totalPrice}</span>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </div>
    <StripeCheckoutButton price={totalPrice}/>
        </div>
    )
}


const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state),
    totalPrice:selectCartTotalPrice(state)
})

export default connect(mapStateToProps)(CheckoutPage);