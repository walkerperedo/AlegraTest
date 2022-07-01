const { KITCHEN_BINDING_KEY } = require("../config");
const RecipeService = require("../services/recipe.service");
const { PublishMessage } = require("../utils");
const { STATUS_CODES } = require("../utils/app-errors");

module.exports = (app, channel) => {
  const service = new RecipeService();

  app.get("/", async (req, res) => {
    try {
      const data = await service.GetAllRecipes();
      return res.status(STATUS_CODES.OK).json(data);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).send(error.toString());
      // next(error);
    }
  });

  app.get("/:recipeId", async (req, res) => {
    try {
      const recipeId = req.params.recipeId;
      const recipe = await service.GetRecipeById({ recipeId });
      PublishMessage(channel, KITCHEN_BINDING_KEY, JSON.stringify({ recipe }));
      return res.status(STATUS_CODES.OK).json(recipe);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).send(error.toString());
    }
  });
};
