import { product } from "../models/Products";
import { State } from "../store";

export const orderloadingSelctor = (state: State) => {
  return state.orders.loading;
};
export const ordersSelctor = (state: State) => {
  const NormalizeOrders = state.orders.Orders;
  const orders = Object.keys(NormalizeOrders).map((k) => NormalizeOrders[+k]);

  return orders;
};
export const ordersMapSelctor = (state: State) => {
  return state.orders.Orders;
};

export const orderProductSelector = (state: State) => {
  return Object.keys(state.orders.Orders).reduce<{
    [orderId: number]: product[];
  }>((prev, currentId) => {
    const order = state.orders.Orders[+currentId];
    const products = order.products.map((pid) => {
      return state.product.products[pid];
    });
    return { ...prev, [currentId]: products };
  }, {});
};
