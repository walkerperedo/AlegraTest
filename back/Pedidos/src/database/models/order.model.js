const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  status: { type: String, enum: ["delivered", "process"], default: "process" },
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "recipe",
    require: true,
  },
});
OrderSchema.plugin(AutoIncrement, { inc_field: "number" });

module.exports = mongoose.model("order", OrderSchema);
