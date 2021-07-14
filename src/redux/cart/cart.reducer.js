import { cartActionTypes } from "./cart.types"
import { addItemToCart, removeCartItems } from "./cart.utils";

const INITIAL_STATE2={
    toggleState:false,
    cartItems:[]
}


 const cartReducer=(state=INITIAL_STATE2,action)=>{
    switch(action.type){
        case cartActionTypes.SET_TOGGLE:
            return{
               ...state,
                toggleState:!state.toggleState
            }

            case cartActionTypes.ADD_ITEMS:
                return{
                    ...state,
                    cartItems:addItemToCart(state.cartItems,action.payload)

                }

                case cartActionTypes.CLEAR_ITEMS_FROM_CART:
                    return {
                        ...state,
                        cartItems:state.cartItems.filter(item=>item.id!==action.payload.id)
                    }


                    case cartActionTypes.REMOVE_ITEMS:
                        return{
                            ...state,
                            cartItems:removeCartItems(state.cartItems,action.payload)

                        }

            default:
                return state
                
    }
}

export default cartReducer;