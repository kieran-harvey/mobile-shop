import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartState = ({ children }) => {
  const items = JSON.parse(localStorage.getItem("cartItems"));
  //   Initial State of the cart
  const initialState = {
    cartItems: items || [],
    quantity: items?.length || 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  //add to cart
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  /*
  const removeFromCart = (payload) => { 
    
  }
  */

  return (
    <CartContext.Provider
      value={{
        addToCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
