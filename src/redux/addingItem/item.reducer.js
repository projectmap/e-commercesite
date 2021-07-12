

const STATE_INITIAL={
    cartItems:[]
}


export const itemReducer=(state=STATE_INITIAL,action)=>{

    switch(action.type){
        case "ADD_ITEMS":
            return{
                ...state,
                cartItems:state.cartItems.push(action.payload)
            }

            default:
                return { 
                    ...state
                }
    }

}