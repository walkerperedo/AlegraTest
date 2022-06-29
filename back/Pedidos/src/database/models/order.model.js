const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  status: { type: String, enum: ["deliver", "process"], default: "process" },
  recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "recipe" },
});
OrderSchema.plugin(AutoIncrement, { inc_field: "number" });

module.exports = mongoose.model("order", OrderSchema);
