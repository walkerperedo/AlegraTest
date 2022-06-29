const BodegaService = require("../services/bodega-service");

module.exports = (app) => {
  const service = new BodegaService();

  app.put("/bodega", async (req, res, next) => {
    try {
      const { ingredintId, quantity } = req.body;
      const { data } = await service.EditIngredient({ ingredintId, quantity });
      return res.json(data);
    } catch (error) {
      next(err);
    }
  });
};
