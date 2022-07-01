// const axios = require("axios").default;
const amqplib = require("amqplib");
const {
  MESSAGE_BROKER_URL,
  EXCHANGE_NAME,
  KITCHEN_BINDING_KEY,
  QUEUE_NAME,
} = require("../config");

// module.exports.GetRecipe = async ({ recipeId }) => {
//   const recipe = await axios.get(`http://localhost:8000/recipes/${recipeId}`);
//   return recipe.data;
// };

// module.exports.UpdateOrder = async ({ orderId, state }) => {
//   await axios.put(`http://localhost:8000/order/${orderId}`, {
//     state,
//   });
// };

// module.exports.CreateOrder = async ({ recipeName }) => {
//   const order = await axios.post(`http://localhost:8000/order`, { recipeName });
//   return order.data;
// };

// module.exports.getIngredient = async ({ ingredientName, quantity }) => {
//   const data = await axios.put(`http://localhost:8000/warehouse`, {
//     ingredientName,
//     quantity,
//   });
//   return data.data;
// };

//
module.exports.CreateChannel = async () => {
  try {
    const connection = await amqplib.connect(MESSAGE_BROKER_URL);
    const channel = await connection.createChannel();
    await channel.assertExchange(EXCHANGE_NAME, "direct", false);
    return channel;
  } catch (error) {
    throw error;
  }
};

module.exports.PublishMessage = async (channel, binding_key, message) => {
  try {
    await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
  } catch (error) {
    throw error;
  }
};

module.exports.SubscribeRecipeMessage = async (channel, service) => {
  const appQueue = await channel.assertQueue(QUEUE_NAME);

  channel.bindQueue(appQueue.queue, EXCHANGE_NAME, KITCHEN_BINDING_KEY);

  channel.consume(appQueue.queue, (data) => {
    console.log("received data");

    // console.log(data.content.toString());
    service.SubscribeEvents(data.content.toString());
    channel.ack(data);
  });
};
