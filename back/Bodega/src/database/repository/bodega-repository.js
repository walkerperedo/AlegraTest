const { IngredientModel } = require("../models");
const { STATUS_CODES, APIError } = require("../../utils/app-errors");

class BodegaRepository {
  async CreateIngredients(array) {
    try {
      const ingredientResult = await IngredientModel.insertMany(array);
      return ingredientResult;
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err);
    }
  }

  async DeleteAllIngredients() {
    try {
      await IngredientModel.deleteMany({});
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err);
    }
  }

  async EditIngredient({ ingredientId, quantity }) {
    try {
      const ingredient = await IngredientModel.findById(ingredientId);

      if (ingredient) {
        ingredient.quantity = quantity;
        await ingredient.save();
        return { message: `${ingredient.name} modified` };
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

  async FindIngredientById({ ingredientId }) {
    try {
      const ingredient = await IngredientModel.findById(ingredientId);
      if (ingredient) {
        return ingredient;
      }
      return {};
    } catch (err) {
      throw APIError(
        "API Error",
        STATUS_CODES.BAD_REQUEST,
        "Unable to find ingredient"
      );
    }
  }
}

module.exports = BodegaRepository;
