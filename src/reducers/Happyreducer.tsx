import { AnyAction } from "redux";
import { Moments } from "../store";
import { SAD_BUTTON_CLICKED } from "../actions";

export type HappyState = {
  happyMoments: Moments[];
};

export const initailHappyState = {
  happyMoments: [],
};

function SadStateReducerfunction(
  currentsadState: HappyState,
  action: AnyAction
): HappyState {
  if (action.type == SAD_BUTTON_CLICKED) {
    // code to be written
  }
  return currentsadState;
}
