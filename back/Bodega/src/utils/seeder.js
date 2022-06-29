const { default: mongoose } = require("mongoose");
const data = require("../data.json");
const { BodegaRepository } = require("../database");

mongoose
  .connect("mongodb://localhost:27017/bodega", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log(err);
  });

const createIngredients = async () => {
  const service = new BodegaRepository();
  await service.DeleteAllIngredients();
  return await service.CreateIngredients(data);
};

createIngredients().then(() => {
  mongoose.connection.close();
  console.log("Ingredients Created and connection closed");
});
