const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hola soy la recetas" });
});

app.listen(8004, () => {
  console.log("Recetas is listening on port 8001");
});
