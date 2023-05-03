import { Order } from "../models/Orders";

export const LOAD_ORDERS = "LoadOrders";
export const Load_Ordersaction = () => ({
  type: LOAD_ORDERS,
});
export const ORDERS_LOADED = "Ordersloaded";
export const Orders_Loadaction = (order: any) => ({
  type: ORDERS_LOADED,
  payload: order,
});

export const ORDERS_DETAIL_LOADED = "Ordered detail loaded";
export const orderDetailLoadedAction = (order: any) => ({
  type: ORDERS_DETAIL_LOADED,
  payload: order,
});
