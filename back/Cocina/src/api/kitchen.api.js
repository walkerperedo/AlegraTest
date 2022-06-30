const { STATUS_CODES } = require("../utils/app-errors");
const KitchenService = require("../service/kitchen.service");

module.exports = (app) => {
  const service = new KitchenService();
  app.post("/", async (req, res) => {
    try {
      const { recipeId } = req.body;
      const recipe = await service.CreateDish({ recipeId });
      res.status(STATUS_CODES.OK).json(recipe);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).send(error.toString());
    }
  });
};
