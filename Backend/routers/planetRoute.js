const express = require("express");
const { createPlanets, updatePlanets, getAllPlanets, getOnePlanet, deleteOnePlanet } = require("../controllers/planetController");

const router = express.Router();



router.post("/createPlanet", createPlanets);
router.put("/updatePlanet", updatePlanets);
router.get("/getAllPlanets", getAllPlanets);
router.get("/getOnePlanet/:id", getOnePlanet);
router.delete("/deleteOnePlanet/:id", deleteOnePlanet);







module.exports = router;
