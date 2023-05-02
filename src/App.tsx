import React, { useEffect, useState } from "react";
import Button from "./Button";
import HappyTracker from "./HappyTracker";
import SadTracker from "./SadTracker";
import HappyInc from "./HappyInc";
import SadInc from "./SadInc";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductloadedAction,
  ProductloadingAction,
  Resetdataclicked,
} from "./actions";
import axios from "axios";
import { poroductloadedselector, poroductloadingslector } from "./selectors";
function App() {
  // const [prod, setProduct] = useState([]);
  const dispatch = useDispatch();
  function resetdata() {
    dispatch(Resetdataclicked);
  }
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
    <div className="flex justify-center">
      <div className="bg-gray-400 rounded-md ">
        {loading &&
          products?.map((p) => {
            return <div key={p.id}>{p.title}</div>;
          })}
        <h1 className="text-3xl text-center text-bold">Mood Tracker</h1>
        {!loading &&
          products?.map((p) => {
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

export default App;
