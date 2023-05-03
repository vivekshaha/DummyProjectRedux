import { product } from "../models/Products";
import { State } from "../store";
import { createSelector } from "reselect";

export const StateOrderSelector = (state: State) => state.orders;
export const OrderProductSelector = (state: State) => state.product.products;

export const orderloadingSelctor = createSelector(
  StateOrderSelector,
  (StateOrder) => StateOrder.loading
);

// export const orderloadingSelctor = (state: State) => {
//   return state.orders.loading;
// };

export const ordersMapSelctor = createSelector(
  StateOrderSelector,
  (StateOrder) => StateOrder.Orders
);

// export const ordersMapSelctor = (state: State) => {
//   return state.orders.Orders;
// };
export const ordersSelctor = createSelector(ordersMapSelctor, (StateOrders) => {
  const NormalizeOrders = StateOrders;
  const orders = Object.keys(NormalizeOrders).map((k) => NormalizeOrders[+k]);
  return orders;
});

// export const ordersSelctor = (state: State) => {
//   const NormalizeOrders = state.orders.Orders;
//   const orders = Object.keys(NormalizeOrders).map((k) => NormalizeOrders[+k]);
//   return orders;
// };

export const orderProductSelector = createSelector(
  ordersMapSelctor,
  OrderProductSelector,
  (StateOrders, OrderProdcuts) =>
    Object.keys(StateOrders).reduce<{
      [orderId: number]: product[];
    }>((prev, currentId) => {
      const order = StateOrders[+currentId];
      const products = order.products.map((pid) => {
        return OrderProdcuts[pid];
      });
      return { ...prev, [currentId]: products };
    }, {})
);
// export const orderProductSelector = (state: State) => {
//   return Object.keys(state.orders.Orders).reduce<{
//     [orderId: number]: product[];
//   }>((prev, currentId) => {
//     const order = state.orders.Orders[+currentId];
//     const products = order.products.map((pid) => {
//       return state.product.products[pid];
//     });
//     return { ...prev, [currentId]: products };
//   }, {});
// };
