const { RecipeModel } = require("../models");

class RecipeRepository {
  async DeleteAllRecipes() {
    try {
      await RecipeModel.deleteMany({});
      return { message: "success" };
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err);
    }
  }

  async CreateManyRecipes(array) {
    try {
      const recipesResult = await RecipeModel.insertMany(array);
      return recipesResult;
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err);
    }
  }

  async GetManyRecipes() {
    try {
      return await RecipeModel.find({});
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err);
    }
  }

  async GetRecipeById(recipeId) {
    try {
      await RecipeModel.findById(recipeId);
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err);
    }
  }
}

module.exports = RecipeRepository;
