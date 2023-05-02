// import { AnyAction } from "redux";
import { Moments } from "../store";
import {
  RESET_DATA_CLICKED,
  SAD_BUTTON_CLICKED,
} from "../actions/mood-action.ts";
import { AnyAction } from "redux";
import { produce } from "immer";

export type SadState = {
  sadMoments: Moments[];
};

const initailSadState: SadState = {
  sadMoments: [],
};

function SadStateReducerfunction(
  currentsadState = initailSadState,
  action: AnyAction
): SadState {
  if (action.type == SAD_BUTTON_CLICKED) {
    const newMoments = {
      points: action.payload.point,
      date: action.payload.date,
    };
    return produce(currentsadState, (draft) => {
      draft.sadMoments.push(newMoments);
    });
  } else if (action.type == RESET_DATA_CLICKED) {
    const data: Moments[] = [];
    return { ...currentsadState, sadMoments: data };
  }
  return currentsadState;
}
export default SadStateReducerfunction;
