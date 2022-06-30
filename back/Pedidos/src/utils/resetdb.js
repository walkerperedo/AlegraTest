const { default: mongoose } = require("mongoose");
const { OrderModel } = require("../database/models");

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

const deleteOrders = async () => {
  await OrderModel.deleteMany({});
  await OrderModel.counterReset("number");
};

deleteOrders().then(() => {
  mongoose.connection.close();
  console.log("All Orders deleted");
});
