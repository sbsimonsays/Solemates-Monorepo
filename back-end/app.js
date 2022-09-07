// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
const apparelController = require("./controllers/apparelController.js");
app.use("/apparels", apparelController);

// Basic Root
app.get("/", (req, res) => {
  res.send("Find Your Solemate!");
});

// Catch-All Error (404 Page)
app.get("*", (req, res) => {
  res.status(404).send("love not found");
});

// EXPORT
module.exports = app;
