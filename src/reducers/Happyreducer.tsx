import { AnyAction } from "redux";
import { Moments } from "../store";
import { HAPPY_BUTTON_CLICKED, RESET_DATA_CLICKED } from "../actions";

export type HappyState = {
  happyMoments: Moments[];
};

export const initailHappyState: HappyState = {
  happyMoments: [],
};

function HappyStateReducerfunction(
  currenthappyState: HappyState,
  action: AnyAction
): HappyState {
  if (action.type == HAPPY_BUTTON_CLICKED) {
    // code to be written
    return {
      ...currenthappyState,
      happyMoments: [
        ...currenthappyState.happyMoments,
        { points: action.payload.point, date: action.payload.date },
      ],
    };
  } else if (action.type == RESET_DATA_CLICKED) {
    const data: Moments[] = [];
    return { ...currenthappyState, happyMoments: data };
  }
  return currenthappyState;
}

export default HappyStateReducerfunction;
