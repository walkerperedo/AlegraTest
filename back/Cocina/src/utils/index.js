const axios = require("axios").default;
module.exports.GetRecipe = async ({ recipeId }) => {
  const recipe = await axios.get(`http://localhost:8000/recetas/${recipeId}`);
  return recipe.data;
};
