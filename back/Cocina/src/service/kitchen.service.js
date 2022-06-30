const { GetRecipe, CreateOrder } = require("../utils");

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

      //entregamos el plato
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = KitchenService;
