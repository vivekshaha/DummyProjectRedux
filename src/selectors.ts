import { State } from "./store";

export const happyIncSelctor = (state: State) => {
  return state.happyState;
};
export const sadIncSelctor = (state: State) => {
  return state.sadState;
};
