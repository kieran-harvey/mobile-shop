const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        quantity: state.quantity + action.payload.count,
        cartItems: [...state.cartItems, action.payload.item],
      };
    case "REMOVE_FROM_CART":
    //TODO
  }
};

export default CartReducer;
