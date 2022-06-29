const { BodegaRepository } = require("../database");
const { FormateData } = require("../utils");
const { APIError } = require("../utils/app-errors");
const axios = require("axios").default;

class BodegaService {
  constructor() {
    this.repository = new BodegaRepository();
  }

  async CreateIngredient(ingredientInput) {
    try {
      const ingredientResult = await this.repository.CreateIngredient(
        ingredientInput
      );
      return FormateData(ingredientResult);
    } catch (err) {
      throw (new APIError("Data not found"), err);
    }
  }

  async EditIngredient({ ingredientId, quantity }) {
    try {
      const ingredient = await this.repository.FindIngredientById({
        ingredientId,
      });

      if (ingredient.quantity < quantity) {
        const newQuantity = ingredient.quantity - quantity;
        return await this.repository.EditIngredient({
          ingredientId,
          quantity: newQuantity,
        });
      } else {
        const answer = await axios.get(
          `https://recruitment.alegra.com/api/farmers-market/buy?ingredient=${ingredient.name}`
        );
        console.log(answer.payload);
        return answer;
      }
    } catch (error) {
      throw new APIError("Couldn't edit the ingrediente quantity", err);
    }
  }
}

module.exports = BodegaService;
