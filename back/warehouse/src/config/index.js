const dotEnv = require("dotenv");
const path = require("path");

if (process.env.NODE_ENV !== "prod") {
  const configFile = path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`);
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config({ path: path.resolve(__dirname, `../.env`) });
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
};
