const { APIError, STATUS_CODES } = require("../../utils/app-errors");
const { OrderModel } = require("../models");

class OrderRepository {
  async GetManyOrders() {
    try {
      return await OrderModel.find({});
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, error);
    }
  }

  async CreateOrder({ recipeName }) {
    try {
      return await OrderModel.create({ recipeName });
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
