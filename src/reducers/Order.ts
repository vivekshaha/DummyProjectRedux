import { AnyAction, compose } from "redux";
import { produce } from "immer";
import { Order } from "../models/Orders";
import {
  LOAD_ORDERS,
  ORDERS_DETAIL_LOADED,
  ORDERS_LOADED,
} from "../actions/orders";
import { normalize, schema } from "normalizr";

export type NormalizeOrders = {
  [id: number]: Order;
};
type producdata = {
  loading: boolean;
  Orders: NormalizeOrders;
};

const State: producdata = {
  loading: false,
  Orders: {},
};

function Orderreducer(currentState = State, action: AnyAction): producdata {
  switch (action.type) {
    case LOAD_ORDERS:
      return produce(currentState, (draft) => {
        draft.loading = true;
      });
    case ORDERS_LOADED:
      //   console.log("funct of product loaded in calles", action.payload.product);
      return produce(currentState, (draft) => {
        draft.loading = false;
        const ordersarr = action.payload;
        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders", {
          products: [productEntity],
        });
        const data = normalize(ordersarr, [orderEntity]);
        // console.log(data);
        draft.Orders = data.entities.orders!;
        //  draft.Orders = normalizedorders;
        //previous code for normalization
        /*    const normalizedorders = ordersarr.reduce(function (
          prev: NormalizeOrders,
          current: Order
        ) {
          return { ...prev, [current.id]: current };
        },
        {});*/
      });
    case ORDERS_DETAIL_LOADED:
      return produce(currentState, (draft) => {
        const order = action.payload;
        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders", {
          products: [productEntity],
        });
        // console.log(order);
        const data = normalize(order, orderEntity);
        // console.log("order normaliese", data);
        draft.Orders[order.id] = data.entities.orders![order.id];
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

export default Orderreducer;
