const express = require("express");
const { createTrip, updateTrip, getAllTrips, getOneTrip, deleteOneTrip } = require("../controllers/tripController");

const router = express.Router();



router.post("/createTrip", createTrip);
router.put("/updateTrip", updateTrip);
router.get("/getAllTrips", getAllTrips);
router.get("/getOneTrip/:id", getOneTrip);
router.delete("/deleteOneTrip/:id", deleteOneTrip);












module.exports = router;
