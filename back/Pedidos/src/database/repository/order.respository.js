const { OrderModel } = require("../models");

class OrderRepository {
  async CreateOrder() {
    try {
      return await OrderModel.create({ recipeId, state });
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
