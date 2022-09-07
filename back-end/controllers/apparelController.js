const express = require("express");
const apparels = express.Router();
const checkName = require("../validations/checkName.js");

//QUERIES
const {
  getAllApparels,
  getApparel,
  createApparel,
  updateApparel,
  deleteApparel,
} = require("../queries/apparels.js");

// Read (All)
apparels.get("/", async (req, res) => {
  const allApparels = await getAllApparels();
  if (allApparels[0]) {
    res.status(200).json({ payload: allApparels, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Read (Singular/Specific ID)
apparels.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apparel = await getApparel(id);
  if (apparel.id) {
    res.json({ payload: apparel, success: true });
  } else {
    res
      .status(404).json({ payload: "not found", success: false, error: "Apparel not found" });
  }
});

// Create
apparels.post("/", async (req, res) => {
  const { body } = req;

  body.name = checkName(body);

  try {
    const createdApparel = await createApparel(body);
    if (createdApparel.id) {
      res.status(200).json({
        success: true,
        payload: createdApparel,
      });
    } else {
      res.status(422).json({
        success: false,
        payload: "Must include name field",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Update
apparels.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  body.name = checkName(body);

  const updatedApparel = await updateApparel(body, id);
  if (updatedApparel.id) {
    res.status(200).json(updatedApparel);
  } else {
    res.status(404).json({ error: "Apparel not found" });
  }
});

// Delete
apparels.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedApparel = await deleteApparel(id);
  if (deletedApparel.id) {
    res.status(200).json({ payload: deletedApparel, success: true });
  } else {
    res.status(404).json({ payload: "not found", success: false });
  }
});

module.exports = apparels;
