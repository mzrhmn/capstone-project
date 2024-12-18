const initialValue = {
  list: [],
  cart: [],
  isLoading: false,
};

const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        list: ["error"],
        isLoading: false,
      };

    case "FETCH_PRODUCTS_START":
      return {
        ...state,
        isLoading: true,
      };

    case "ADD_PRODUCT_TO_CART":
      const isDuplicate = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (isDuplicate) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_TO_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default productReducer;
