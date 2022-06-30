const { APIError, STATUS_CODES } = require("../../utils/app-errors");
const { OrderModel } = require("../models");

class OrderRepository {
  async CreateOrder({ recipeId }) {
    try {
      const order = await OrderModel.create({ recipeId });
      return order;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, error);
    }
  }

  async EditState({ state, orderId }) {
    try {
      const order = await OrderModel.findById(orderId);
      order.status = state;
      await order.save();
      return { message: "success" };
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, error);
    }
  }
}

module.exports = OrderRepository;
