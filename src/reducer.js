 const initialState= {
    isCartOpen: false,
    cartDetails:{
        count:0,
        product:[],
      
    }
 }

 export const reducerfn= (state= initialState, action)=>{
switch(action.type){
    case "TOGGLE_CART" :return {
        ...state, 
isCartOpen: !state.isCartOpen
    }
    case "ADDED_TO_CART":return{
        ...state,
        cartDetails:{
          
            count:state.cartDetails.count+1,
            product: [...state.cartDetails.product, action.payload],
           
        }
    }

    default : return state
}
 }