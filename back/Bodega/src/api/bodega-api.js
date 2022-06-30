const BodegaService = require("../services/bodega-service");
const { STATUS_CODES } = require("../utils/app-errors");

module.exports = (app) => {
  const service = new BodegaService();

  app.put("/", async (req, res, next) => {
    try {
      const { ingredientName, quantity } = req.body;
      const data = await service.EditIngredient({ ingredientName, quantity });
      return res.status(STATUS_CODES.OK).json(data);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).send(error.toString());
      // next(error);
    }
  });

  app.get("/", async (req, res) => {
    try {
      const ingredients = await service.GetAllIngredients();
      return res.status(STATUS_CODES.OK).json(ingredients);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).send(error.toString());
    }
  });
};
