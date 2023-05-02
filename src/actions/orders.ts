export const LOAD_ORDERS = "loadoreser";
export const Load_Ordersaction = () => ({
  type: LOAD_ORDERS,
});
export const ORDERS_LOADED = "loadLoaded";
export const Orders_Loadaction = (order: any) => ({
  type: ORDERS_LOADED,
  payload: order,
});
