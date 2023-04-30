import React, { useState } from "react";
import Button from "./Button";
import HappyTracker from "./HappyTracker";
import SadTracker from "./SadTracker";
import HappyInc from "./HappyInc";
import SadInc from "./SadInc";
import { useDispatch } from "react-redux";
import { Resetdataclicked } from "./actions";
function App() {
  const dispatch = useDispatch();
  function resetdata() {
    dispatch(Resetdataclicked);
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 h-screen bg-gray-400 rounded-md">
        <h1 className="text-3xl text-center text-bold">Mood Tracker</h1>
        <Button onClick={resetdata}>App Reset</Button>
        <HappyTracker />
        <SadTracker />
        <HappyInc />
        <SadInc />
      </div>
    </div>
  );
}

export default App;
