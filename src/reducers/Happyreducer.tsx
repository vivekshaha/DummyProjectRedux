import { AnyAction } from "redux";
import { Moments } from "../store";
import { HAPPY_BUTTON_CLICKED, RESET_DATA_CLICKED } from "../actions";
import { produce } from "immer";

export type HappyState = {
  happyMoments: Moments[];
};

const initailHappyState: HappyState = {
  happyMoments: [],
};

function HappyStateReducerfunction(
  currenthappyState = initailHappyState,
  action: AnyAction
): HappyState {
  if (action.type == HAPPY_BUTTON_CLICKED) {
    // code to be written
    const newMoments = {
      points: action.payload.point,
      date: action.payload.date,
    };

    return produce(currenthappyState, (draft) => {
      draft.happyMoments.push(newMoments);
    });
  } else if (action.type == RESET_DATA_CLICKED) {
    const data: Moments[] = [];
    return { ...currenthappyState, happyMoments: data };
  }
  return currenthappyState;
}

export default HappyStateReducerfunction;
