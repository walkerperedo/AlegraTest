//todo este service no se use y toda la logica hecha aqui se hace en el front
//Futura implemntacion con rabbitMQ para que toda la logica se desarrolle aqui
const {
  GetRecipe,
  CreateOrder,
  getIngredient,
  UpdateOrder,
  SubscribeMessage,
  PublishMessage,
} = require("../utils");
const { APIError } = require("../utils/app-errors");

class KitchenService {
  constructor() {
    this.recipe = {};
  }

  async CreateDish({ channel }) {
    try {
      // //Buscamos la receta en especifico
      // //Creamos un pedido
      // const order = await CreateOrder({ recipeName: recipe.name });
      // //obtemos los ingredientes con sus cantidades
      // const ingredients = recipe.ingredients;
      // //le pedimos los ingredientes a la bodega
      // const ingredientsPromises = ingredients.map(async (ingredient) => {
      //   return await getIngredient({
      //     ingredientName: ingredient.name,
      //     quantity: ingredient.quantity,
      //   });
      // });
      // await Promise.all(ingredientsPromises);
      // //entregamos el plato
      // await UpdateOrder({ orderId: order._id, state: "delivered" });
      // return { message: "succes" };
    } catch (error) {
      console.log(error);
      throw (new APIError("Sorry, there was an error"), error);
    }
  }
  //buscamos una receta
  async SubscribeEvents(payload) {
    this.recipe = payload;
  }
}

module.exports = KitchenService;
