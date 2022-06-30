const axios = require("axios").default;

module.exports.GetRecipe = async ({ recipeId }) => {
  const recipe = await axios.get(`http://localhost:8000/recipes/${recipeId}`);
  return recipe.data;
};

module.exports.UpdateOrder = async ({ orderId, state }) => {
  await axios.put(`http://localhost:8000/order/${orderId}`, {
    state,
  });
};

module.exports.CreateOrder = async ({ recipeName }) => {
  const order = await axios.post(`http://localhost:8000/order`, { recipeName });
  return order.data;
};

module.exports.getIngredient = async ({ ingredientName, quantity }) => {
  const data = await axios.put(`http://localhost:8000/warehouse`, {
    ingredientName,
    quantity,
  });
  return data.data;
};
