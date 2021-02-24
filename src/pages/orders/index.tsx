import * as React from "react";
import { getOrders } from "../../api";

import Layout from "../../components/Layout";

export type Order = {
  id: string;
  status: string;
  eta: string; // Date
  parcel_id: string;
  sender: string;
  verification_required: boolean;
  location_id: string;
  location_name: string;
  location_coordinate_latitude: number; // should be parsed
  location_coordinate_longitude: number; // should be parsed
  location_status_ok: boolean;
  user_phone: string;
  user_name: string;
  notes: string;
  last_updated: string; // Date
};

const Orders = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);

  React.useEffect(() => {
    getOrders()
      .then((orders) => {
        setOrders(orders);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <Layout>
      <div>My orders</div>
      <table>
        {orders.map((order) => (
          <tr>
            <td>{order.sender}</td>
            <td>{order.eta}</td>
            <td>{order.location_name}</td>
          </tr>
        ))}
      </table>
    </Layout>
  );
};

export default Orders;
