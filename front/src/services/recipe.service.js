import axios from "axios";
const PATH = "http://localhost:8000/recipes";

const recipesService = {
  getAll: async () => {
    const res = await axios.get(PATH);
    return res.data;
  },
  getOne: async (recipeId) => {
    const res = await axios.get(`${PATH}/${recipeId}`);
    return res.data;
  },
};

export default recipesService;
