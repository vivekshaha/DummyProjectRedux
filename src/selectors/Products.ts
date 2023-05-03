import { createSelector } from "reselect";
import { State } from "../store";

export const ProductSelctor = (state: State) => state.product;

export const poroductloadingslector = createSelector(
  ProductSelctor,
  (StateProduct) => StateProduct.loading
);

// export const poroductloadingslector = (state: State) => {
//   return state.product.loading;
// };
export const poroductloadedselector = createSelector(
  ProductSelctor,
  (StateProduct) => {
    const normalizeProducts = StateProduct.products;
    const product = Object.keys(normalizeProducts).map(
      (k) => normalizeProducts[+k]
    );
    return product;
  }
);
// export const poroductloadedselector = (state: State) => {
//   const normalizeProducts = state.product.products;
//   const product = Object.keys(normalizeProducts).map(
//     (k) => normalizeProducts[+k]
//   );
//   return product;
// };
