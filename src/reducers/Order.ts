import { AnyAction } from "redux";
import { produce } from "immer";
import { Order } from "../models/Orders";
import { LOAD_ORDERS, ORDERS_LOADED } from "../actions/orders";

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
        const ordersarr = action.payload;
        const normalizedorders = ordersarr.reduce(function (
          prev: NormalizeOrders,
          current: Order
        ) {
          return { ...prev, [current.id]: current };
        },
        {});
        draft.Orders = normalizedorders;
        draft.loading = false;
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
