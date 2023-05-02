import { AnyAction } from "redux";
import { PRODUCT_LOADED, PRODUCT_LOADING } from "../actions";
import { produce } from "immer";

export type product = {
  title: string;
  id: number;
  description: string;
};
type producdata = {
  products?: product[];
  loading: boolean;
};

const intitialState: producdata = {
  loading: false,
  products: [],
};

function pruductreducer(
  currentState = intitialState,
  action: AnyAction
): producdata {
  switch (action.type) {
    case PRODUCT_LOADING:
      return produce(currentState, (draft) => {
        draft.loading = true;
      });
    case PRODUCT_LOADED:
      //   console.log("funct of product loaded in calles", action.payload.product);
      return produce(currentState, (draft) => {
        draft.products = action.payload.product;
        draft.loading = false;
      });

    //   {
    //     ...currentState,
    //     loading: false,
    //     products: [action.payload.products],
    //   };
    default:
      return intitialState;
  }
}

export default pruductreducer;
