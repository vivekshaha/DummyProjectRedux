import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderProductSelector, ordersMapSelctor } from "./selectors/Orders";
import axios from "axios";
import { orderDetailLoadedAction } from "./actions/orders";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const Orderid = +param.orderId!;

  const ordersMap = useSelector(ordersMapSelctor);
  const order = ordersMap[Orderid];
  useEffect(() => {
    if (!ordersMap[Orderid]) {
      axios.get("https://dummyjson.com/carts/" + Orderid).then((response) => {
        dispatch(orderDetailLoadedAction(response.data));
      });
    }
  }, []);
  const orderdata = useSelector(orderProductSelector);
  const Productarr = orderdata[+Orderid];
  if (!order) {
    return <div>Loading.....</div>;
  }
  return (
    <div>
      thi is OrderDetail page
      <h1>
        {order.totalQuantity} ore taotla
        {order.total}
      </h1>
      {Productarr.map((p) => {
        return <div key={p.id}>{p.title}</div>;
      })}
    </div>
  );
};

export default OrderDetail;
