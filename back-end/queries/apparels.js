const db = require("../db/dbConfig.js");

// Show Route (ALL-Index Route)
const getAllApparels = async () => {
  try {
    const allApparels = await db.any("SELECT * FROM apparels");
    return allApparels;
  } catch (err) {
    return err;
  }
};

// Show Route (Item per ID)
const getApparel = async (id) => {
  try {
    const oneApparel = await db.one("SELECT * FROM apparels WHERE id=$1", id);
    return oneApparel;
  } catch (err) {
    return err;
  }
};

// Create Route
const createApparel = async (apparel) => {
  const { name, shoesize, budget, color, image } = apparel;
  try {
    const newApparel = await db.one(
      "INSERT INTO apparels (name, shoesize, budget, color, image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, shoesize, budget, color, image]
    );
    return newApparel;
  } catch (err) {
    return err;
  }
};

// Delete Route
const deleteApparel = async (id) => {
  try {
    const deletedApparel = await db.one(
      "DELETE FROM apparels WHERE id=$1 RETURNING *",
      id
    );
    return deletedApparel;
  } catch (err) {
    return err;
  }
};

// Update Route
const updateApparel = async (apparel, id) => {
  const { name, shoesize, budget, color, image } = apparel;
  try {
    const updatedApparel = await db.one(
      "UPDATE apparels SET name=$1, shoesize=$2, budget=$3, color=$4, image=$5 WHERE id=$6 RETURNING *",
      [name, shoesize, budget, color, image, id]
    );
    return updatedApparel;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllApparels,
  getApparel,
  createApparel,
  deleteApparel,
  updateApparel,
};
