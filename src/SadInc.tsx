import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./actions";

const SadInc = () => {
  const [points, setPoints] = useState(0);
  const dispatch = useDispatch();
  const Increment = () => {
    // console.log("incrment is calles");
    dispatch(sadButtonClicked(points, new Date()));
  };
  return (
    <>
      <h1>Send the sadness data</h1>
      <input
        type="number"
        onChange={(event) => setPoints(+event.target.value)}
        value={points}
        className="w-20 border outline-none"
      />
      <Button onClick={Increment}>yes</Button>
    </>
  );
};

export default SadInc;
