import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

// action - 01
export const addToCart = (data) => {
  // console.log("action", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
// action - 02
export const removeToCart = () => {
  return {
    type: REMOVE_TO_CART,
  };
};
