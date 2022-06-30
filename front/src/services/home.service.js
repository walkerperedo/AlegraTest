import axios from "axios";
const PATH = "http://localhost:8000/kitchen";

const homeService = {
  askDish: async ({ recipeId }) => {
    const res = await axios.post(PATH, { recipeId });
    return res.data;
  },
};

export default homeService;
