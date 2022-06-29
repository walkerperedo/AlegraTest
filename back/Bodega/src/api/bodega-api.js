const BodegaService = require("../services/bodega-service");
const { STATUS_CODES } = require("../utils/app-errors");

module.exports = (app) => {
  const service = new BodegaService();

  app.put("/bodega", async (req, res, next) => {
    try {
      const { ingredientId, quantity } = req.body;
      const data = await service.EditIngredient({ ingredientId, quantity });
      return res.status(STATUS_CODES.OK).json(data);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).send(error.toString());
      // next(error);
    }
  });
};
