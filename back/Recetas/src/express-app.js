const express = require("express");
const cors = require("cors");
const { appEvents } = require("./api");
const HandleErrors = require("./utils/error-handler");
const recipeApi = require("./api/recipe.api");

module.exports = async (app, channel) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.static(__dirname + "/public"));

  //api
  recipeApi(app, channel);

  //error handling
  app.use(HandleErrors);
};
