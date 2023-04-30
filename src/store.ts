import { createStore } from "@reduxjs/toolkit";
import { Action, AnyAction } from "redux";
import { SadState, initailSadState } from "./reducers/Sadreducer";
import { HappyState, initailHappyState } from "./reducers/Happyreducer";
export type Moments = {
  points: number;
  date: Date;
};
export type State = {
  sad: SadState;
  happy: HappyState;
};

const initialState = {
  sad: initailSadState,
  happy: initailHappyState,
};

function reducer(
  previousState: State = initialState,
  action: AnyAction
): State {
  console.log("fucntion is called:", action);
  if (action.type == "SadClicked") {
    return {
      ...previousState,
      sadState: [
        ...previousState.sadState,
        { points: action.payload.point, date: action.payload.date },
      ],
    };
  } else if (action.type == "HappyClicked") {
    console.log("reducre happ cliek calles", action.payload.date);
    return {
      ...previousState,
      happyState: [
        ...previousState.happyState,
        { points: action.payload.point, date: action.payload.date },
      ],
    };
  } else if (action.type == "resetData") {
    const happydata: Moments[] = [];
    const saddata: Moments[] = [];
    return { ...previousState, happyState: happydata, sadState: saddata };
  }
  return previousState;
}

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
