import axios from "axios";
const PATH = "http://localhost:8000/order";

const OrderService = {
  getOrders: async () => {
    const res = await axios.get(PATH);
    return res.data;
  },
  createOrder: async (recipeName) => {
    const order = await axios.post(PATH, { recipeName });
    return order.data;
  },
  updateOrder: async ({ orderId, state }) => {
    await axios.put(`http://localhost:8000/order/${orderId}`, {
      state,
    });
  },
};

export default OrderService;
