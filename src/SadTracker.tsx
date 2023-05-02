import React, { useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { sadIncSelctor } from "./selectors/selectors";

const SadTracker = () => {
  const sadarr = useSelector(sadIncSelctor);
  return (
    <>
      <div className="my-4 rounded-md bg-violet-600">
        {sadarr.map((item, index) => {
          return (
            <div key={index}>
              Your sad Intensity is {item.points} at{" "}
              {item.date.toLocaleString()}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SadTracker;
