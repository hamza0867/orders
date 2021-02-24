import axios from "axios";
import { Order } from "./pages/orders/index";

const AxiosInstance = axios.create({
  baseURL: "https://demo4231066.mockable.io",
});

export const getOrders = (): Promise<Order[]> => {
  return AxiosInstance.get("/orders").then((res) => res.data.orders);
};
