import { State } from "../store";

export const orderloadingSelctor = (state: State) => {
  return state.orders.loading;
};
export const ordersSelctor = (state: State) => {
  const NormalizeOrders = state.orders.Orders;
  const orders = Object.keys(NormalizeOrders).map((k) => NormalizeOrders[+k]);

  return orders;
};
