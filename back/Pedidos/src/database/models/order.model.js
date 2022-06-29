const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  number: Number,
  status: { type: String, enum: ["deliver", "process"] },
  recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "recipe" },
});

module.exports = mongoose.model("order", OrderSchema);
