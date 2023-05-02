import { product } from "./reducers/Productreducer";

export const HAPPY_BUTTON_CLICKED = "HappyClicked";
export const RESET_DATA_CLICKED = "resetData";
export const SAD_BUTTON_CLICKED = "SadClicked";
export const PRODUCT_LOADING = "Productloading";
export const PRODUCT_LOADED = "Productloaded";

export const happyButtonClicked = (point: number, date: Date) => {
  return {
    type: HAPPY_BUTTON_CLICKED,
    payload: { date: date, point: point },
  };
};
export const sadButtonClicked = (point: number, date: Date) => {
  return {
    type: SAD_BUTTON_CLICKED,
    payload: { date: date, point: point },
  };
};
export const Resetdataclicked = {
  type: RESET_DATA_CLICKED,
};

export const ProductloadingAction = () => {
  return {
    type: PRODUCT_LOADING,
    payload: { undefined },
  };
};
export const ProductloadedAction = (product: product[]) => {
  return {
    type: PRODUCT_LOADED,
    payload: { product },
  };
};
