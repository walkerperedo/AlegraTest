import axios from "axios";
const PATH = "http://localhost:8000/recipes";

const recipesService = {
  getAll: async () => {
    const res = await axios.get(PATH);
    return res.data;
  },

  //   add: async (recipe) => {
  //     await Axios.post(PATH, recipe);
  //   },

  //   delete: async (recipeId) => {
  //     await Axios.delete(`${PATH}/${recipeId}`);
  //   },

  //   update: async (recipeId, recipe) => {
  //     await Axios.put(`${PATH}/${recipeId}`, recipe);
  //   },

  //   search: async (query) => {
  //     const res = await Axios.get(`${PATH}/?search=${query}`);
  //     return res.data;
  //   },
};

export default recipesService;
