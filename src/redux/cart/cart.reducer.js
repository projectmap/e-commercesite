import { cartActionTypes } from "./cart.types"


const INITIAL_STATE={
    toggleState:false
}


 const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_TOGGLE":
            return{
               
                toggleState:!state.toggleState
            }

            default:
                return{
                    state
                }
    }
}

export default cartReducer;