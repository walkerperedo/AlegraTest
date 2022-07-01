const dotEnv = require("dotenv");
const path = require("path");

if (process.env.NODE_ENV !== "prod") {
  const configFile = path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`);
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  // MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
  // EXCHANGE_NAME: "ONLINE_BUFFET",
  // WAREHOUSE_BINDING_KEY: "WAREHOUSE_SERVICE",
  // ORDER_BINDING_KEY: "ORDER_SERVICE",
  // RECIPE_BINDING_KEY: "RECIPES_SERVICE",
};
