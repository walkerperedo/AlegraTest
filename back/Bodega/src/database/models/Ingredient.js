const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: String,
  quantity: Number,
});

module.exports = mongoose.model("ingredient", IngredientSchema);
