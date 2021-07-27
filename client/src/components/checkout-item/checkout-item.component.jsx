import React from "react";
import {addItem, clearItemsFromCart,removeCartItems} from "../../redux/cart/cart.actions";

import { connect } from "react-redux";
import "./checkout-item.styles.scss";




const CheckoutItem=({cartItem,removeItems,removeCartItems,cart,addItem})=>{
    const {id,name,price,imageUrl,quantity}=cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span onClick={()=>{console.log("check cart",cart)
                    removeCartItems(cartItem)
                
                }} className="arrow">&#10094;</span>
               <span className="value">{quantity}</span> 
                <span className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</span>
                </span>
            <span className="price">{price}</span>
            <div onClick={()=>removeItems(cartItem)} className="remove-button">&#10005;</div>
        </div>
    )
}


const mapStateToProps=(state)=>({
    cart:state.cart.cartItems
})


const mapDispatchToProps=(dispatch)=>({
    removeItems:(item)=>dispatch(clearItemsFromCart(item)),
    removeCartItems:(item)=>dispatch(removeCartItems(item)),
    addItem:item=>dispatch(addItem(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutItem);