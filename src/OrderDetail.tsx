import React from "react";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
  const param = useParams();
  const Orderid = param.orderId || +param.orderId!;

  return <div>thi is OrderDetail page{Orderid}</div>;
};

export default OrderDetail;
