import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Productlist from "./Productlist";
// import OrderDetail from "./OrderDetailwithRedux";
import Orderlist from "./Orderlist";
import OrderDetail from "./OrderDetailwithRedux";

function App() {
  // const [prod, setProduct] = useState([]);
  return (
    <div className="flex justify-center">
      <Routes>
        <Route index element={<Productlist />} />
        <Route path="/order/" element={<Orderlist />} />
        <Route path="/order/:orderId" element={<OrderDetail Orderid={3} />} />
      </Routes>
    </div>
  );
}

export default App;
