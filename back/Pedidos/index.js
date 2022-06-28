const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hola soy la pedidos" });
});

app.listen(8003, () => {
  console.log("Pedidos is listening on port 8003");
});
