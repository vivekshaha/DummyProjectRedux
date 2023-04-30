import { AnyAction } from "redux";
import { Moments } from "../store";
import { SAD_BUTTON_CLICKED } from "../actions";

export type SadState = {
  sadMoments: Moments[];
};

export const initailSadState = {
  sadMoments: [],
};

function SadStateReducerfunction(
  currentsadState: SadState,
  action: AnyAction
): SadState {
  if (action.type == SAD_BUTTON_CLICKED) {
  }
  return currentsadState;
}
export default SadStateReducerfunction;
