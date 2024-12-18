export const fetchProduct = () => {
  return async (dispatch, getState) => {
    // dispatchEvent({
    //   type: "FETCH_PRODUCTS",
    //   payload: [1, 2, 3],
    // });

    dispatch({
      type: "FETCH_PRODUCTS_START",
    });

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_ERROR",
      });
    }
  };
};

export const addProductToCart = (product) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: product,
    });
  };
};

export const removeToCart = (productId) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "REMOVE_TO_CART",
      payload: { id: productId },
    });
  };
};
