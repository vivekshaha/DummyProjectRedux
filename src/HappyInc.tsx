import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./actions";

const HappyInc = () => {
  const [points, setPoints] = useState<number>(0);
  const dispatch = useDispatch();
  const Increment = () => {
    // console.log("function calles happ");
    dispatch(happyButtonClicked(points, new Date()));
  };
  return (
    <>
      <div>send the hapiness data</div>
      <input
        value={points}
        onChange={(event) => setPoints(+event.target.value)}
        type="number"
        className="w-20 border outline-none"
      />
      <Button onClick={Increment}>Yes</Button>
    </>
  );
};

export default HappyInc;
