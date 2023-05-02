import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Productlist from "./Productlist";
import OrderDetail from "./OrderDetail";
import Orderlist from "./Orderlist";

function App() {
  // const [prod, setProduct] = useState([]);
  return (
    <div className="flex justify-center">
      <Routes>
        <Route index element={<Productlist />} />
        <Route path="/order/" element={<Orderlist />} />
        <Route path="/order/:orderId" element={<OrderDetail />} />
      </Routes>
    </div>
  );
}

export default App;
