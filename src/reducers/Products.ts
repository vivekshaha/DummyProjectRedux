import { AnyAction } from "redux";
import { PRODUCT_LOADED, PRODUCT_LOADING } from "../actions/products";
import { produce } from "immer";
import { product } from "../models/Products";
import { ORDERS_DETAIL_LOADED, ORDERS_LOADED } from "../actions/orders";
import { normalize, schema } from "normalizr";

type NormalizeProduct = {
  [id: number]: product;
};
type producdata = {
  products: NormalizeProduct;
  loading: boolean;
  // order_proudut: { [orderid: number]: number[] };
};

const State: producdata = {
  loading: false,
  products: {},
  // order_proudut: {},
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
    case ORDERS_DETAIL_LOADED:
      return produce(currentState, (draft) => {
        const order = action.payload;
        // console.log(order);
        const productEntity = new schema.Entity("products");
        const data = normalize(order.products, [productEntity]);
        // console.log("normalexe dta", data);
        draft.products = { ...draft.products, ...data.entities.products };
      });

    default:
      return State;
  }
}

export default pruductreducer;
