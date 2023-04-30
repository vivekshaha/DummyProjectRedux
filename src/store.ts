import { createStore } from "@reduxjs/toolkit";
import { Action, AnyAction } from "redux";
import SadStateReducerfunction, {
  SadState,
  initailSadState,
} from "./reducers/Sadreducer";
import HappyStateReducerfunction, {
  HappyState,
  initailHappyState,
} from "./reducers/Happyreducer";
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
  return {
    sad: SadStateReducerfunction(previousState.sad, action),
    happy: HappyStateReducerfunction(previousState.happy, action),
  };
}

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
