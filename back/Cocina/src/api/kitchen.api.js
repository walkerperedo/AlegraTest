const { STATUS_CODES } = require("../utils/app-errors");
const KitchenService = require("../service/kitchen.service");
const { SubscribeRecipeMessage } = require("../utils");

module.exports = (app, channel) => {
  const service = new KitchenService();

  SubscribeRecipeMessage(channel, service);

  app.post("/", async (req, res) => {
    try {
      const { recipeId } = req.body;
      const recipe = await service.CreateDish({ recipeId, channel });
      res.status(STATUS_CODES.OK).json(recipe);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).send(error.toString());
    }
  });
};
