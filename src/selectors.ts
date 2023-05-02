import { State } from "./store";

export const happyIncSelctor = (state: State) => {
  return state.happy.happyMoments;
};
export const sadIncSelctor = (state: State) => {
  return state.sad.sadMoments;
};
export const poroductloadingslector = (state: State) => {
  return state.product.loading;
};
export const poroductloadedselector = (state: State) => {
  console.log("thi si oo", state.product.products);
  return state.product.products;
};
