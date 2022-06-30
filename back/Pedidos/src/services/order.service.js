const { OrderRepository } = require("../database/");
const { APIError } = require("../utils/app-errors");

class OrderService {
  constructor() {
    this.repository = new OrderRepository();
  }

  async GetAllOrders() {
    try {
      return await this.repository.GetManyOrders();
    } catch (error) {
      throw (new APIError("Data not found"), error);
    }
  }

  async CreateOrder({ recipeName }) {
    try {
      return await this.repository.CreateOrder({ recipeName });
    } catch (error) {
      throw (new APIError("Data not found"), error);
    }
  }

  async EditOrder({ orderId, state }) {
    try {
      return await this.repository.EditState({ orderId, state });
    } catch (error) {
      throw (new APIError("Data not found"), error);
    }
  }
}

module.exports = OrderService;
