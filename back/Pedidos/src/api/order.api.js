const OrderService = require("../services/order.service");
const { STATUS_CODES } = require("../utils/app-errors");

module.exports = (app) => {
  const service = new OrderService();

  app.get("/", async (req, res) => {
    try {
      const data = await service.GetAllOrders();
      return res.status(STATUS_CODES.OK).json(data);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).send(error.toString());
    }
  });

  app.post("/", async (req, res) => {
    try {
      const data = await service.CreateOrder({ recipeId: req.body.recipeId });
      return res.status(STATUS_CODES.OK).json(data);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).send(error.toString());
      // next(error);
    }
  });

  app.put("/:orderId", async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const state = req.body.state;
      const recipe = await service.EditOrder({ orderId, state });
      return res.status(STATUS_CODES.OK).json(recipe);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).send(error.toString());
    }
  });
};
