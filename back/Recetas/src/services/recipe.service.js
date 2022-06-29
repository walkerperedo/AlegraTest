const { RecipeRepository } = require("../database/");
const { APIError } = require("../utils/app-errors");

class RecipeService {
  constructor() {
    this.repository = new RecipeRepository();
  }

  async GetAllRecipes() {
    try {
      return await this.repository.GetManyRecipes();
    } catch (error) {
      throw (new APIError("Data not found"), error);
    }
  }

  async GetRecipeById({ recipeId }) {
    try {
      return await this.repository.GetRecipeById(recipeId);
    } catch (error) {
      throw (new APIError("Data not found"), error);
    }
  }
}

module.exports = RecipeService;
