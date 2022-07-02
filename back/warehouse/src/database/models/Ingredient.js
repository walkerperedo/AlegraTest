const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: String,
  quantity: Number,
  quantityBoughtFromPlaza: { type: Number, default: 0 },
});

module.exports = mongoose.model("ingredient", IngredientSchema);
