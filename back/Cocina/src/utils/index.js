const axios = require("axios").default;

module.exports.GetRecipe = async ({ recipeId }) => {
  const recipe = await axios.get(`http://localhost:8000/recipes/${recipeId}`);
  return recipe.data;
};

module.exports.CreateOrder = async ({ recipeId }) => {
  const order = await axios.post(`http://localhost:8000/order`, { recipeId });
  return order.data;
};
