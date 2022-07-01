import axios from "axios";
const PATH = "http://localhost:8000/warehouse";

const warehouseService = {
  getAll: async () => {
    const res = await axios.get(PATH);
    return res.data;
  },
  getIngrediet: async ({ ingredientName, quantity }) => {
    const data = await axios.put(PATH, {
      ingredientName,
      quantity,
    });
    return data.data;
  },
};

export default warehouseService;
