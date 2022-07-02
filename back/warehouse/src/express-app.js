const express = require("express");
const cors = require("cors");
const { appEvents } = require("./api");
const HandleErrors = require("./utils/error-handler");
const bodegaApi = require("./api/bodega-api");

module.exports = async (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.static(__dirname + "/public"));

  //listeners
  appEvents(app);

  //api
  bodegaApi(app);

  //error handling
  app.use(HandleErrors);
};
