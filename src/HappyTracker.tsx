import React from "react";
import { useSelector } from "react-redux";
import { happyIncSelctor } from "./selectors";

const HappyTracker = () => {
  const happyarr = useSelector(happyIncSelctor);
  return (
    <div className="my-4 bg-orange-700 rounded-md">
      {happyarr.map((item, index) => {
        return (
          <div key={index}>
            Your happy Intensity is {item.points} at{" "}
            {item.date.toLocaleString()}
          </div>
        );
      })}
    </div>
  );
};

export default HappyTracker;
