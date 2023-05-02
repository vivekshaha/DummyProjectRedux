import { State } from "../store";

export const happyIncSelctor = (state: State) => {
  return state.happy.happyMoments;
};
export const sadIncSelctor = (state: State) => {
  return state.sad.sadMoments;
};
