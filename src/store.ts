import { createStore } from "@reduxjs/toolkit";
import { Action, AnyAction, combineReducers } from "redux";
import SadStateReducerfunction from "./reducers/Sadreducer";
import HappyStateReducerfunction from "./reducers/Happyreducer";
import { Reducer } from "react";
import pruductreducer from "./reducers/Productreducer";
export type Moments = {
  points: number;
  date: Date;
};

const reducer = combineReducers({
  sad: SadStateReducerfunction,
  happy: HappyStateReducerfunction,
  product: pruductreducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
