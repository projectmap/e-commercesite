import { cartActionTypes } from "./cart.types"


export const setToggleMenu=()=>({
    type:"SET_TOGGLE"

    
})

export const addItem=(item)=>({
type:cartActionTypes.ADD_ITEMS,
payload:item
})


export const clearItemsFromCart=(item)=>({
    type:cartActionTypes.CLEAR_ITEMS_FROM_CART,
    payload:item
})


export const removeCartItems=(item)=>({
    type:cartActionTypes.REMOVE_ITEMS,
    payload:item
})