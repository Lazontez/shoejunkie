const path = require("path");
const lodo = require("express").Router();
const apiRoutes = require("./api/index");

// API Routes
lodo.use(apiRoutes);

// If no API routes are hit, send the React app
lodo.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = lodo;

