import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Load_Ordersaction, Orders_Loadaction } from "./actions/orders";
import axios from "axios";
import { orderloadingSelctor, ordersSelctor } from "./selectors/Orders";
import { Link } from "react-router-dom";

const Orderlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Load_Ordersaction());
    axios.get("https://dummyjson.com/carts").then((response) => {
      dispatch(Orders_Loadaction(response.data.carts));
    });
  }, []);

  const loading = useSelector(orderloadingSelctor);
  const orders = useSelector(ordersSelctor);
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {orders.map((o) => {
        return (
          <h1 key={o.id}>
            tis is your order id {""}
            <Link to={"/order/" + o.id} className="text-yellow-300 ">
              {o.id}
            </Link>{" "}
            {o.totalProducts}
          </h1>
        );
      })}
    </div>
  );
};

export default Orderlist;
