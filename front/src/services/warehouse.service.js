import axios from "axios";
const PATH = "http://localhost:8000/warehouse";

const warehouseService = {
  getAll: async () => {
    const res = await axios.get(PATH);
    return res.data;
  },
};

export default warehouseService;
