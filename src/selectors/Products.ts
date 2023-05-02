import { State } from "../store";

export const poroductloadingslector = (state: State) => {
  return state.product.loading;
};
export const poroductloadedselector = (state: State) => {
  const normalizeProducts = state.product.products;
  const product = Object.keys(normalizeProducts).map(
    (k) => normalizeProducts[+k]
  );
  return product;
};
