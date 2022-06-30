const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: String,
  ingredients: [{ name: String, quantity: Number }],
  number: Number,
  preparacion: String,
});

module.exports = mongoose.model("recipe", RecipeSchema);
