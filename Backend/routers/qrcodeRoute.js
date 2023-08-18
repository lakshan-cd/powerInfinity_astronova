const express = require("express");
const router = express.Router();

const { scanQR } = require("../controllers/qrController");

router.post("/scan-qr", scanQR);

module.exports = router;
