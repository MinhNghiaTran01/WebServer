
const express = require("express");
const app = express.Router();

const controller = require("../../controller/admin/login.controller.js");
const login = require("./login.route.js");
const systemConfig = require("../../config/system.js");


module.exports.login = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;
  app.use(PATH_ADMIN + '/login', login);
};
