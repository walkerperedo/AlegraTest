const { default: mongoose } = require("mongoose");
const data = require("../data.json");
const { RecipeRepository } = require("../database");

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
  const service = new RecipeRepository();
  await service.DeleteAllRecipes();
  return await service.CreateManyRecipes(data);
};

createIngredients().then(() => {
  mongoose.connection.close();
  console.log("Recipes Created and connection closed");
});
