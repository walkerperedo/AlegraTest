const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hola soy la bodega" });
});

app.listen(8001, () => {
  console.log("Bodega is listening on port 8001");
});
