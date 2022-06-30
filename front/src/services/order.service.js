import axios from "axios";
const PATH = "http://localhost:8000/order";

const OrderService = {
  getOrders: async () => {
    const res = await axios.get(PATH);
    return res.data;
  },
};

export default OrderService;
