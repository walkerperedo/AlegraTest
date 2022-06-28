const { IngredientModel } = require("../models");
const { STATUS_CODES, APIError } = require("../../utils/app-errors");

class BodegaRepository {
  async CreateIngredient({ name, quantity }) {
    try {
      const ingredient = new IngredientModel({ name, quantity });
      const ingredientResult = await ingredient.save();
      return ingredientResult;
    } catch (err) {
      throw APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to create ingredient"
      );
    }
  }

  async EditIngredient({ name, quantity }) {
    try {
      const ingredient = await IngredientModel.findOne({ name });
      if (ingredient) {
        ingredient.quantity = quantity;
        return await ingredient.save();
      }
      return {};
    } catch (err) {
      throw APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to edit quantity of ingredient"
      );
    }
  }
}
