import { AnyAction } from "redux";
import { PRODUCT_LOADED, PRODUCT_LOADING } from "../actions/products";
import { produce } from "immer";
import { product } from "../models/Products";
import { ORDERS_LOADED } from "../actions/orders";

type NormalizeProduct = {
  [id: number]: product;
};
type producdata = {
  products: NormalizeProduct;
  loading: boolean;
};

const State: producdata = {
  loading: false,
  products: {},
};

function pruductreducer(currentState = State, action: AnyAction): producdata {
  switch (action.type) {
    case PRODUCT_LOADING:
      return produce(currentState, (draft) => {
        draft.loading = true;
      });
    case PRODUCT_LOADED:
      //   console.log("funct of product loaded in calles", action.payload.product);
      const Productsarr = action.payload.product;
      const normalizedproduct = Productsarr.reduce(function (
        prev: NormalizeProduct,
        current: product
      ) {
        return { ...prev, [current.id]: current };
      },
      {});
      return produce(currentState, (draft) => {
        draft.products = normalizedproduct;
        draft.loading = false;
      });
    case ORDERS_LOADED:
      return produce(currentState, (draft) => {
        const orders = action.payload;
        const products = orders.reduce(function (
          prev: product[],
          current: any
        ) {
          return [...prev, ...current.products];
        },
        []);
        const normalizedproduct = products.reduce(function (
          prev: NormalizeProduct,
          current: product
        ) {
          return { ...prev, [current.id]: current };
        },
        {});
        draft.products = normalizedproduct;
      });

    //   {
    //     ...currentState,
    //     loading: false,
    //     products: [action.payload.products],
    //   };
    default:
      return State;
  }
}

export default pruductreducer;
