const { GetRecipe } = require("../utils");

class KitchenService {
  async CreateDish({ recipeId }) {
    try {
      //Buscamos la receta en especifico
      const recipe = await GetRecipe({ recipeId });
      //obtemos los ingredientes
      //   const ingredients = recipe.ingredients;
      //le pedimos los ingredientes a la bodega

      //entregamos el plato
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = KitchenService;
