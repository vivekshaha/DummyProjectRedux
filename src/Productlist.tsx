import React, { useEffect, useState } from "react";
import Button from "./Button";
import HappyTracker from "./HappyTracker";
import SadTracker from "./SadTracker";
import HappyInc from "./HappyInc";
import SadInc from "./SadInc";
import { useDispatch, useSelector } from "react-redux";
import { ProductloadedAction, ProductloadingAction } from "./actions/products";
import axios from "axios";
import {
  poroductloadedselector,
  poroductloadingslector,
} from "./selectors/Products";
import { Resetdataclicked } from "./actions/mood-action.ts";

function Productlist() {
  // const [prod, setProduct] = useState([]);
  const dispatch = useDispatch();
  //   function resetdata() {
  //     dispatch(Resetdataclicked);
  //   }
  useEffect(() => {
    dispatch(ProductloadingAction());
    axios.get("https://myeasykart.codeyogi.io/products").then((response) => {
      dispatch(ProductloadedAction(response.data.data));
    });
  }, []);
  useEffect(() => {}, []);

  const loading = useSelector(poroductloadingslector);
  const products = useSelector(poroductloadedselector);
  // console.log("this i sapp", products);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center w-full">
      <div className="bg-gray-400 rounded-md ">
        {products?.map((p) => {
          return <div key={p.id}>{p.title}</div>;
        })}
        {/* <Button onClick={resetdata}>App Reset</Button>
        <HappyTracker />
        <SadTracker />
        <HappyInc />
        <SadInc /> */}
      </div>
    </div>
  );
}

export default Productlist;
