import { connect } from "react-redux";
import { orderDetailLoadedAction } from "./actions/orders";
import { orderProductSelector, ordersMapSelctor } from "./selectors/Orders";
import { State } from "./store";
import OrderDetail, { OrderDetailProps } from "./OrderDetail";

function mapStateToProp(state: State, ownProps: Partial<OrderDetailProps>) {
  const Orderid: number = ownProps.Orderid!;
  return {
    order: ordersMapSelctor(state)[Orderid],
    products: orderProductSelector(state)[Orderid],
  };
}
const mapPropToState = {
  orderDetailLoaded: orderDetailLoadedAction,
};

export default connect(mapStateToProp, mapPropToState)(OrderDetail);
