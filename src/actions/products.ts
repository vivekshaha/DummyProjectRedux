import { product } from "../models/Products";
export const PRODUCT_LOADING = "Productloading";
export const PRODUCT_LOADED = "Productloaded";
export const ProductloadingAction = () => {
  return {
    type: PRODUCT_LOADING,
    payload: { undefined },
  };
};
export const ProductloadedAction = (product: product[]) => {
  return {
    type: PRODUCT_LOADED,
    payload: { product },
  };
};
