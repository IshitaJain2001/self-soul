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

case "ADDED_TO_CART": {
  const existingIndex = state.cartDetails.product.findIndex(
    (product) => product.item === action.payload.item
  );

  let updatedProducts;

  if (existingIndex !== -1) {
    updatedProducts = state.cartDetails.product.map((product, index) =>
      index === existingIndex
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  } else {
    updatedProducts = [
      ...state.cartDetails.product,
      { ...action.payload, quantity: 1 }, // 👈 add quantity for first time
    ];
  }

  return {
    ...state,
    cartDetails: {
      ...state.cartDetails,
      count: state.cartDetails.count + 1,
      product: updatedProducts,
    },
  };
}


    case "INCREMENT_QUANTITY": {
      const updated = state.cartDetails.product.map((item, index) =>
        index === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return {
        ...state,
        cartDetails: {
          ...state.cartDetails,
          product: updated,
        },
      };
    }

    case "DECREMENT_QUANTITY": {
      const updated = state.cartDetails.product
        .map((item, index) =>
          index === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

      return {
        ...state,
        cartDetails: {
          ...state.cartDetails,
          product: updated,
        },
      };
    }


    case "REMOVE_FROM_CART": {
  const updated = state.cartDetails.product.filter(
    (_, i) => i !== action.payload
  );
  return {
    ...state,
    cartDetails: {
      ...state.cartDetails,
      product: updated,
      count: state.cartDetails.count - 1,
    },
  };
}

    default : return state
}
 }