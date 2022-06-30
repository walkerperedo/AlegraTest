const {
  GetRecipe,
  CreateOrder,
  getIngredient,
  UpdateOrder,
} = require("../utils");

class KitchenService {
  async CreateDish({ recipeId }) {
    try {
      //Creamos un pedido
      const order = await CreateOrder({ recipeId });
      //Buscamos la receta en especifico
      const recipe = await GetRecipe({ recipeId });
      //obtemos los ingredientes con sus cantidades
      const ingredients = recipe.ingredients;
      //le pedimos los ingredientes a la bodega
      const ingredientsPromises = ingredients.map(async (ingredient) => {
        return await getIngredient({
          ingredientName: ingredient.name,
          quantity: ingredient.quantity,
        });
      });
      await Promise.all(ingredientsPromises);

      //entregamos el plato
      await UpdateOrder({ orderId: order._id, state: "delivered" });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = KitchenService;
