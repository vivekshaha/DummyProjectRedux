import React, { FC, useEffect } from "react";
// import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { orderProductSelector, ordersMapSelctor } from "./selectors/Orders";
import axios from "axios";
// import { orderDetailLoadedAction } from "./actions/orders";
// import { State } from "./store";
import { Order } from "./models/Orders";
import { product } from "./models/Products";
import { AnyAction } from "redux";
export type OrderDetailProps = {
  order: Order;
  products: product[];
  // dispatch: (action: AnyAction) => void;
  orderDetailLoaded: (order: Order) => void;
  Orderid: number;
};

const OrderDetail: FC<OrderDetailProps> = ({
  order,
  products,
  orderDetailLoaded,
  Orderid,
  // dispatch,
}) => {
  // const dispatch = useDispatch();
  const param = useParams();
  // const Orderid = +param.orderId!;

  // const ordersMap = useSelector(ordersMapSelctor);
  // const order = ordersMap[Orderid];
  useEffect(() => {
    axios.get("https://dummyjson.com/carts/" + Orderid).then((response) => {
      orderDetailLoaded(response.data);
    });
  }, []);
  // const orderdata = useSelector(orderProductSelector);
  // const Productarr = orderdata[+Orderid];
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
      {products.map((p) => {
        return <div key={p.id}>{p.title}</div>;
      })}
    </div>
  );
};

// export default OrderDetail;

export default OrderDetail;
