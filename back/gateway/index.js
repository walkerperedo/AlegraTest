const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/cocina", proxy("http://localhost:8002")); //cocina
app.use("/bodega", proxy("http://localhost:8001"));
app.use("/pedidos", proxy("http://localhost:8003"));
app.use("/recetas", proxy("http://localhost:8004"));

app.listen(8000, () => {
  console.log("Gateway is listening on port 8000");
});
