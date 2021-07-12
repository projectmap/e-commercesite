import { cartActionTypes } from "./cart.types"


export const setToggleMenu=()=>({
    type:"SET_TOGGLE"

    
})

export const addItem=(item)=>({
type:cartActionTypes.ADD_ITEMS,
payload:item
})