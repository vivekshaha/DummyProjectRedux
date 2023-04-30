import { AnyAction } from "redux";
import { Moments } from "../store";
import { RESET_DATA_CLICKED, SAD_BUTTON_CLICKED } from "../actions";

export type SadState = {
  sadMoments: Moments[];
};

export const initailSadState: SadState = {
  sadMoments: [],
};

function SadStateReducerfunction(
  currentsadState: SadState,
  action: AnyAction
): SadState {
  if (action.type == SAD_BUTTON_CLICKED) {
    return {
      ...currentsadState,
      sadMoments: [
        ...currentsadState.sadMoments,
        { points: action.payload.point, date: action.payload.date },
      ],
    };
  } else if (action.type == RESET_DATA_CLICKED) {
    const data: Moments[] = [];
    return { ...currentsadState, sadMoments: data };
  }
  return currentsadState;
}
export default SadStateReducerfunction;
